import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deletBlogs, editBlogs } from "../../store/slice/blogsSlice";

import { Field, Form, Formik } from "formik";
import TextInput from "../Navbar/Form/TextInput";
import TextareInput from "../Navbar/Form/TextareInput";
import axios from "axios";
import { toast } from "react-toastify";
function BlogsCardManage(props) {
  const [editBlog, setEditBlog] = useState(false);
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const blogs = useSelector((state) => state.blogs.list);
  const dispatch = useDispatch();
  const deletBlogHandler = async () => {
    try {
      let res = await axios.delete(
        `https://660c7b7b3a0766e85dbe2fd9.mockapi.io/blogs/${props.id}`
      );
      dispatch(deletBlogs(props.id));
      toast.success("مقاله حذف شد");
    } catch (error) {
      toast.error("مقاله حذف نشد");
    }
  };
  const editBlogHandler = async () => {
    setEditBlog(true);
  };

  const submitHandler = async (values) => {
    let newBlog = {
      id: props.id,
      title: values.title,
      body: values.body,
      html: values.html,
      css: values.css,
      JavaScript: values.JavaScript,
      React: values.React,
    };
    try {
      let res = await axios.put(
        `https://660c7b7b3a0766e85dbe2fd9.mockapi.io/blogs/${props.id}`,
        newBlog
      );
      dispatch(editBlogs(newBlog));
      setEditBlog(false);

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
    <div
      key={props.id}
      className={`${
        props.className ?? ""
      } relative   flex-col  space-x-10 px-4 lg:px-52 py-6`}>
      <div
        className={`${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
        } rounded-xl  bg-clip-border  shadow-md`}>
        {editBlog ? (
          <Formik
            initialValues={{
              title: props.title,
              body: props.body,
              html: props.html,
              css: props.css,
              JavaScript: props.JavaScript,
              react: props.react,
            }}
            onSubmit={submitHandler}>
            <Form className="p-6">
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
        ) : (
          <>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-end">
                <p
                  dir="rtl"
                  className="block font-sans text-3xl font-bold leading-relaxed antialiased">
                  {props.title}
                </p>
              </div>
              <p
                dir="rtl"
                className={`${
                  darkMode ? "text-gray-200" : "text-gray-800"
                } text-right text-xl font-semibold text-wrap`}>
                {props.body}
              </p>
            </div>
            <div className="p-6 pt-0 flex justify-start space-x-5">
              <button
                onClick={deletBlogHandler}
                className={`${
                  darkMode ? "bg-red-600 " : "bg-red-500 "
                } select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none `}
                type="button">
                حذف مقاله
              </button>
              <button
                onClick={editBlogHandler}
                className={`${
                  darkMode ? "bg-green-600 " : "bg-green-500 "
                } select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none `}
                type="button">
                ویرایش مقاله
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogsCardManage;
