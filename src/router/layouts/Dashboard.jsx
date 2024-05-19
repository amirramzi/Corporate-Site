import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import { Link } from "react-router-dom";
function Dashboard() {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const btnList = [
    { id: 1, name: "بازگشت به خانه  ", icon: <HomeOutlinedIcon />, href: "/" },
    {
      id: 2,
      name: "مدیریت کاربران",
      icon: <ManageAccountsOutlinedIcon />,
      href: "/dashboard/user-manage",
    },
    {
      id: 3,
      name: "مدیریت مقاله ها",
      icon: <ManageSearchOutlinedIcon />,
      href: "/dashboard/blogs-mange",
    },
    {
      id: 4,
      name: "اضافه کردن مقاله",
      icon: <CreateOutlinedIcon />,
      href: "/dashboard/blogs-add",
    },
  ];
  const soonList = [
    { id: 1, name: "coming soon ...", icon: <TimelapseOutlinedIcon /> },
    { id: 2, name: "coming soon ...", icon: <TimelapseOutlinedIcon /> },
    { id: 3, name: "coming soon ...", icon: <TimelapseOutlinedIcon /> },
    { id: 4, name: "coming soon ...", icon: <TimelapseOutlinedIcon /> },
  ];
  return (
    <>
      <Sidebar />
      <div className="px-4 lg:px-56 py-6">
        <div className="flex flex-col justify-between space-y-4 text-center lg:flex-row lg:space-y-0 mt-8">
          {btnList.map((list) => (
            <Link
              key={list.id}
              to={list.href}
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
              } w-52 h-36 flex justify-center items-center rounded-lg`}>
              {list.icon}
              <span>{list.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between space-y-4 text-center lg:flex-row lg:space-y-0 mt-8">
          {soonList.map((list) => (
            <Link
              key={list.id}
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
              } opacity-50 cursor-not-allowed w-52 h-36 flex justify-center items-center rounded-lg`}>
              {list.icon}
              <span>{list.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
