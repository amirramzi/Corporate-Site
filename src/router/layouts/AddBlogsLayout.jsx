import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import AddBlogs from "../../components/Blogs/AddBlogs";
import { ToastContainer } from "react-toastify";
function AddBlogsLayout() {
  return (
    <>
      <Sidebar />
      <AddBlogs />
      <ToastContainer />
    </>
  );
}

export default AddBlogsLayout;
