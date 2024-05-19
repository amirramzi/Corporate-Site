import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAuth } from "../../../store/slice/toggleSlice";
import Avatar from "./Avatar";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

function DropDown() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutAuth());
  };
  const menuItems = [
    {
      id: 1,
      name: "پروفایل",
      icon: <PersonOutlineIcon />,
      href: "/Profile",
    },
    {
      id: 2,
      name: "داشبورد",
      icon: <DashboardIcon />,
      href: "/Dashboard",
    },
    {
      id: 3,
      name: "اعلانات",
      icon: <NotificationsIcon />,
      href: "/Notifications",
    },
    {
      id: 4,
      name: "خروج",
      icon: <LogoutIcon />,
      click: logoutHandler,
    },
  ];
  return (
    <Menu>
      <Menu.Button>
        <Avatar />
      </Menu.Button>
      <Menu.Items className="flex flex-col  px-2 py-2 space-y-2 translate-y-32 translate-x-14  absolute  w-40 origin-top-right bg-slate-600 rounded-md shadow-lg focus:outline-none">
        {menuItems.map((item) => (
          <Menu.Item key={item.id}>
            {({ active }) => (
              <Link
                onClick={item.click}
                to={item.href}
                className={`${
                  active ? "bg-gray-800 text-white" : "text-white"
                } group flex flex-row-reverse w-full  items-center rounded-md px-2 py-2 text-sm`}>
                {item.icon}
                <span className="mr-2">{item.name}</span>
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
export default DropDown;
