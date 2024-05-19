import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../store/slice/toggleSlice";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavToggle() {
  const dispatch = useDispatch();
  const navHandel = useSelector((state) => state.toggle.navbar);
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const navHandler = () => {
    dispatch(toggleNavbar());
  };
  return (
    <div className="flex lg:hidden">
      <button
        onClick={navHandler}
        type="button"
        className={`${
          darkMode
            ? "text-gray-200 hover:text-gray-400 focus:text-gray-400"
            : "text-gray-500 hover:text-gray-600 focus:text-gray-600"
        } focus:outline-none`}>
        {navHandel ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
}

export default NavToggle;
