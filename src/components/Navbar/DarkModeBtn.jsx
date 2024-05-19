import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/slice/toggleSlice";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

function DarkModeBtn() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <button
      className={`${
        darkMode
          ? "bg-slate-500 hover:bg-gray-700"
          : "bg-gray-800 hover:bg-gray-400 hover:text-black"
      } px-2 py-1 rounded-md  text-white `}
      onClick={darkModeHandler}>
      {darkMode ? (
        <LightModeIcon className="text-yellow-400" />
      ) : (
        <NightsStayIcon className="text-gray-200" />
      )}
    </button>
  );
}

export default DarkModeBtn;
