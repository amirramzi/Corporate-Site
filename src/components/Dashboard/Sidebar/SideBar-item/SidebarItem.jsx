import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SidebarBtn from "../SidebarBtn";

function SidebarItem() {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const isOpen = useSelector((state) => state.toggle.sidebar);
  const navList = [
    { id: 1, name: "خانه", href: "/" },
    { id: 2, name: "لیست کاربران", href: "/dashboard/user-manage" },
    { id: 3, name: "لسیت مقالات", href: "/dashboard/blogs-mange" },
    { id: 4, name: " اضافه کردن مقاله", href: "/dashboard/blogs-add" },
  ];
  return (
    <div
      className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}
      ${
        isOpen ? "block" : "hidden"
      } fixed top-0 right-0 z-50 h-screen w-64 px-4`}>
      <div className="flex justify-between mt-3">
        <SidebarBtn />
        <Link to={"/"}> لوگو</Link>
      </div>
      <div className="mt-8">
        <div className="flex flex-col items-center text-right  w-full">
          {navList.map((nav) => (
            <Link
              key={nav.id}
              onClick={nav.onClick}
              to={nav.href}
              className={`${
                darkMode
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-400"
              } px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md w-full`}>
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
