import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../store/slice/blogsSlice";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import BlogsCardManage from "./BlogsCardManage";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function BlogsManage() {
  const blogs = useSelector((state) => state.blogs.list);
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
      <Sidebar />
      <Tab.Group>
        <Tab.List className={`space-x-4 pt-6 flex justify-center`}>
          {tabBtn.map((btn) => (
            <Tab
              key={btn.id}
              className={`px-6 py-2 bg-slate-600 focus:bg-gray-400 text-gray-200 rounded-lg lg:rounded-full`}>
              {btn.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panel>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogsCardManage
                id={blog.id}
                title={blog.title}
                body={blog.body}
                html={blog.html}
                css={blog.css}
                JavaScript={blog.JavaScript}
                React={blog.React}
                className={`${blog.html ? "flex" : "hidden"}`}
              />
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogsCardManage
                id={blog.id}
                title={blog.title}
                body={blog.body}
                html={blog.html}
                css={blog.css}
                JavaScript={blog.JavaScript}
                React={blog.React}
                className={`${blog.css ? "flex" : "hidden"}`}
              />
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogsCardManage
                id={blog.id}
                title={blog.title}
                body={blog.body}
                html={blog.html}
                css={blog.css}
                JavaScript={blog.JavaScript}
                React={blog.React}
                className={`${blog.JavaScript ? "flex" : "hidden"}`}
              />
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogsCardManage
                id={blog.id}
                title={blog.title}
                body={blog.body}
                html={blog.html}
                css={blog.css}
                JavaScript={blog.JavaScript}
                React={blog.React}
                className={`${blog.React ? "flex" : "hidden"}`}
              />
            </div>
          ))}
        </Tab.Panel>
      </Tab.Group>
      <ToastContainer />
    </>
  );
}

export default BlogsManage;
