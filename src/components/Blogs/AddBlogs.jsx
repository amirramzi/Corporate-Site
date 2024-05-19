import React from "react";
import { useSelector } from "react-redux";
import BlogsForm from "./BlogsForm";

function AddBlogs() {
  const darkMode = useSelector((state) => state.toggle.darkMode);

  return (
    <div className="flex justify-center w-full">
      <div
        className={`${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"
        }  mt-20 w-[600px] text-right px-8 py-4 rounded-lg`}>
        <h2 className="font-bold text-2xl">اضافه کردن مقاله</h2>

        <BlogsForm />
      </div>
    </div>
  );
}

export default AddBlogs;
