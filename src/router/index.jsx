import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "./layouts/Profile";
import Teach from "./layouts/Teach";
import UserManage from "./layouts/UserManage";
import BlogsManage from "../components/Blogs/BlogsManage";
import AddBlogsLayout from "./layouts/AddBlogsLayout";
import Dashboard from "./layouts/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/teach", element: <Teach /> },
  { path: "/profile", element: <Profile /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/user-manage", element: <UserManage /> },
  { path: "/dashboard/blogs-mange", element: <BlogsManage /> },
  { path: "/dashboard/blogs-add", element: <AddBlogsLayout /> },
  { path: "/Favorite", element: <h2>Favorite</h2> },
  { path: "/Notifications", element: <h2>Notifications</h2> },
]);
export default router;
