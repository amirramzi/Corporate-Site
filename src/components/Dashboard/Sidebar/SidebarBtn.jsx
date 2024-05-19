import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../store/slice/toggleSlice";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function SidebarBtn() {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const isOpen = useSelector((state) => state.toggle.sidebar);
  const dispatch = useDispatch();
  const sidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <button
      className={`${
        darkMode
          ? "bg-slate-500 hover:bg-gray-700"
          : "bg-gray-800 hover:bg-gray-400 hover:text-black"
      } px-2 py-1 rounded-md  text-yellow-400 `}
      onClick={sidebarHandler}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

export default SidebarBtn;
