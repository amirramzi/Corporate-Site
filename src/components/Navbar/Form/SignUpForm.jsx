import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/signupModalSlice";
import {
  startLoading,
  stopLoading,
  loginAuth,
} from "../../../store/slice/toggleSlice";

import TextInput from "./TextInput";
import PassInput from "./PassInput";
import axios from "axios";

function SignUpForm(props) {
  let registerFormSchema = yup.object().shape({
    name: yup
      .string()
      .required("فیلد نام الزامی است")
      .min(3, "تعداد حروف کم است"),
    family: yup
      .string()
      .required("فیلد نام خانوادگی الزامی است")
      .min(3, "تعداد حروف کم است"),
    phone: yup
      .number()
      .typeError("شماره همراه باید عدد باشد")
      .required("فیلد شماره همراه الزامی است")
      .min(11),
    email: yup
      .string()
      .required("قیلد ایمیل الزامی است")
      .email("ایمیل وارد شده نادرست است"),
    password: yup
      .string()
      .required("فیلد  رمز الزامی است")
      .min(8, "رمز وارد شده باید حداقل 8 حروف باشد"),
  });
  const dispatch = useDispatch();
  const submitHandler = async (values, { resetForm }) => {
    dispatch(startLoading());
    try {
      let res = await fetch(
        "https://660c7b7b3a0766e85dbe2fd9.mockapi.io/users",
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(values, null, 2),
        }
      );

      if (res.ok) {
        resetForm();
        dispatch(closeModal());
        dispatch(loginAuth());
        toast.success("اکانت شما ساخته شد");
      }
    } catch (error) {
      toast.error("اکانت شما ساخته نشد");
    } finally {
      dispatch(stopLoading());
    }
  };
  const updateUserHandelr = async (values) => {
    let newUser = {
      id: props.id,
      name: values.name,
      family: values.family,
      phone: values.phone,
      email: values.email,
      password: values.password,
    };
    try {
      let res = await axios.put(
        `https://660c7b7b3a0766e85dbe2fd9.mockapi.io/users/${props.id}`,
        newUser
      );
      toast.success("مشخصات شما تغییر کرد");
    } catch (error) {
      toast.error("مشخصات شما تغییر نکرد");
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        name: props.name ?? "",
        family: props.family ?? "",
        phone: props.phone ?? "",
        email: props.email ?? "",
        password: props.password ?? "",
      }}
      onSubmit={props.onSubmit ? updateUserHandelr : submitHandler}
      validationSchema={registerFormSchema}>
      <Form>
        <div className=" bg-red-300 text-red-700 text-right text-xs divide-y divide-red-800 mb-4 rounded-md">
          <ErrorMessage name="name" component="div" className="px-4 py-1" />
          <ErrorMessage name="family" component="div" className="px-4 py-1" />
          <ErrorMessage name="phone" component="div" className="px-4 py-1" />
          <ErrorMessage name="email" component="div" className="px-4 py-1" />
          <ErrorMessage name="password" component="div" className="px-4 py-1" />
        </div>

        <TextInput htmlFor="name" label="نام" name="name" type="text" />
        <TextInput
          htmlFor="family"
          label="نام خانوادگی"
          name="family"
          type="text"
        />
        <TextInput
          htmlFor="phone"
          label="شماره همراه"
          name="phone"
          type="text"
          placeholder="0912 445 8595"
        />
        <TextInput
          htmlFor="email"
          label="ایمیل"
          name="email"
          type="email"
          placeholder="example@gamil.com"
        />
        <PassInput htmlFor="password" label="رمز" name="password" />
        <div className="mt-4 flex justify-start">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            {props.btnName ?? "تایید"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
