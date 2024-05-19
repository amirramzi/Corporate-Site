import React, { useState } from "react";
import { useSelector } from "react-redux";
import DarkModeBtn from "../../Navbar/DarkModeBtn";
import SidebarBtn from "./SidebarBtn";
import SidebarItem from "./SideBar-item/SidebarItem";
function Sidebar() {
  const darkMode = useSelector((state) => state.toggle.darkMode);

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        } w-full h-auto px-4 py-3 flex justify-between relative`}>
        <DarkModeBtn />
        <SidebarBtn />
        <SidebarItem />
      </div>
    </>
  );
}

export default Sidebar;
