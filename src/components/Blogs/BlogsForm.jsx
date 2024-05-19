import React from "react";
import TextInput from "../Navbar/Form/TextInput";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import TextareInput from "../Navbar/Form/TextareInput";
import { addBlogs } from "../../store/slice/blogsSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

function BlogsForm() {
  const blogs = useSelector((state) => state.blogs.list);
  console.log(blogs);
  let registerFormSchema = yup.object().shape({
    title: yup
      .string()
      .required("فیلد تیتر الزامی است")
      .min(3, "تعداد حروف کم است"),
    body: yup.string().required("فیلد").min(3, "تعداد حروف کم است"),
  });
  const dispatch = useDispatch();
  const submitHandler = async (values, { resetForm }) => {
    let newBlog = {
      title: values.title,
      body: values.body,
      html: values.html,
      css: values.css,
      JavaScript: values.JavaScript,
      React: values.React,
    };
    try {
      let res = await axios.post(
        "https://660c7b7b3a0766e85dbe2fd9.mockapi.io/blogs",
        newBlog
      );

      dispatch(addBlogs(newBlog));
      resetForm();
      toast.success("ثبت مقاله انجام شد");
    } catch (error) {
      toast.error("ثبت مقاله ناموفق بود");
    }
  };
  const checkList = [
    { id: 1, name: "html" },
    { id: 2, name: "css" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
  ];
  return (
    <Formik
      initialValues={{
        title: "",
        body: "",
        html: false,
        css: false,
        JavaScript: false,
        React: false,
      }}
      onSubmit={submitHandler}
      validationSchema={registerFormSchema}>
      <Form>
        <div className=" bg-red-300 text-red-700 text-right text-xs divide-y divide-red-800 my-4  rounded-md">
          <ErrorMessage name="title" component="div" className="px-4 py-1" />
          <ErrorMessage name="body" component="div" className="px-4 py-1" />
        </div>
        <div className="w-full my-3 flex flex-row-reverse justify-between ">
          <span>نوع مقاله </span>
          <div className="flex space-x-5">
            {checkList.map((list) => (
              <label key={list.id}>
                <Field type="checkbox" name={list.name} />
                {list.name}
              </label>
            ))}
          </div>
        </div>

        <TextInput
          htmlFor="title"
          label="تیتر"
          name="title"
          type="text"
          dir="rtl"
        />
        <TextareInput
          htmlFor="body"
          label="توضیحات"
          name="body"
          type="text"
          dir="rtl"
        />
        <div className="mt-4 flex justify-start">
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

export default BlogsForm;
