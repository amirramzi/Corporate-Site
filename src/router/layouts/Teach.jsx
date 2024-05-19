import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../store/slice/blogsSlice";
import { Tab } from "@headlessui/react";
import Navbar from "../../components/Navbar/Navbar";
import BlogsCardTeach from "../../components/Blogs/BlogsCardTeach";
import axios from "axios";

function Teach() {
  const blogs = useSelector((state) => state.blogs.list);
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const dispatch = useDispatch();
  const getBlogs = async () => {
    let res = await axios.get(
      "https://660c7b7b3a0766e85dbe2fd9.mockapi.io/blogs"
    );
    dispatch(setBlogs(res.data));
  };
  useEffect(() => {
    getBlogs();
  }, [blogs]);
  const tabBtn = [
    { id: 1, name: "html" },
    { id: 2, name: "css" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
  ];
  return (
    <>
      <Navbar />
      <Tab.Group>
        <Tab.List className={`space-x-4 pt-6 flex justify-center`}>
          {tabBtn.map((btn) => (
            <Tab
              key={btn.id}
              className={`px-6 py-2 bg-slate-600 text-gray-200 focus:bg-slate-400 rounded-lg  lg:rounded-full`}>
              {btn.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panel>
          <div className="w-full h-auto mt-6 px-4 lg:px-52  overflow-hidden">
            <div
              className={`${
                darkMode
                  ? " bg-gray-800 text-white"
                  : " bg-gray-200 text-gray-900"
              } w-full h-full  rounded-md`}>
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <BlogsCardTeach
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                    className={`${blog.html ? "flex" : "hidden"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="w-full h-auto mt-6 px-4 lg:px-52  overflow-hidden">
            <div
              className={`${
                darkMode
                  ? " bg-gray-800 text-white"
                  : " bg-gray-200 text-gray-900"
              } w-full h-full  rounded-md`}>
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <BlogsCardTeach
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                    className={`${blog.css ? "flex" : "hidden"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="w-full h-auto mt-6 px-4 lg:px-52  overflow-hidden">
            <div
              className={`${
                darkMode
                  ? " bg-gray-800 text-white"
                  : " bg-gray-200 text-gray-900"
              } w-full h-full  rounded-md`}>
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <BlogsCardTeach
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                    className={`${blog.JavaScript ? "flex" : "hidden"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="w-full h-auto mt-6 px-4 lg:px-52  overflow-hidden">
            <div
              className={`${
                darkMode
                  ? " bg-gray-800 text-white"
                  : " bg-gray-200 text-gray-900"
              } w-full h-full  rounded-md`}>
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <BlogsCardTeach
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                    className={`${blog.React ? "flex" : "hidden"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Tab.Panel>
      </Tab.Group>
    </>
  );
}

export default Teach;
