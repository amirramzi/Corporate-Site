import React, { useState, useEffect } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/SigninModalSlice";
import {
  startLoading,
  stopLoading,
  loginAuth,
} from "../../../store/slice/toggleSlice";

import TextInput from "./TextInput";
import PassInput from "./PassInput";

function SignInForm() {
  const [users, setUsers] = useState([]);
  let registerFormSchema = yup.object().shape({
    email: yup
      .string()
      .required("قیلد ایمیل الزامی است")
      .email("ایمیل وارد شده نادرست است"),
    password: yup
      .string()
      .required("فیلد  رمز الزامی است")
      .min(8, "رمز وارد شده باید حداقل 8 حروف باشد"),
  });
  const getUserFromApi = async () => {
    try {
      let res = await fetch(
        "https://660c7b7b3a0766e85dbe2fd9.mockapi.io/users"
      );
      let getUsers = await res.json();
      if (res.ok) {
        setUsers(getUsers);
      }
    } catch (error) {
      toast.error("اینترنت  ضعیف است");
    }
  };
  useEffect(() => {
    getUserFromApi();
  }, []);
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    dispatch(startLoading());

    setTimeout(() => {
      const userReq = users.filter((user) => {
        if (user.email === values.email && user.password === values.password) {
          return true;
        }
      });
      if (userReq.length >= 1) {
        dispatch(closeModal());
        dispatch(stopLoading());
        dispatch(loginAuth());
        toast.success("به حساب کاربری خود خوش آمدید");
      } else {
        toast.error("شما حساب کاربری ندارید");
        dispatch(stopLoading());
      }
    }, 2000);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submitHandler}
      validationSchema={registerFormSchema}>
      <Form>
        <div className=" bg-red-300 text-red-700 text-right text-xs divide-y divide-red-800 mb-4 rounded-md">
          <ErrorMessage name="email" component="div" className="px-4 py-1" />
          <ErrorMessage name="password" component="div" className="px-4 py-1" />
        </div>
        <TextInput
          htmlFor="email"
          label="ایمیل"
          name="email"
          type="email"
          placeholder="example@gamil.com"
        />
        <PassInput htmlFor="password" label="رمز" name="password" />
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            تایید
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default SignInForm;
