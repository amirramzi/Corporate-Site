import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavItem(props) {
  const navHandel = useSelector((state) => state.toggle.navbar);
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const navList = [
    {
      id: 1,
      name: "خانه",
      href: "/",
    },
    {
      id: 2,
      name: "آموزش",
      href: "/teach",
    },

    {
      id: 3,
      name: "درباره ما",
      href: "/",
      onClick: props.aboutClick,
    },
    {
      id: 4,
      name: "خدمات",
      href: "/",
      onClick: props.servicClick,
    },
    {
      id: 5,
      name: "تماس با ما",
      href: "/",
      onClick: props.contactClick,
    },
  ];
  return (
    <div
      className={`
    ${darkMode ? "bg-gray-800 " : "bg-white "} 
    ${navHandel ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"}
    absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center `}>
      <div className="flex flex-col items-end -mx-6 lg:flex-row-reverse lg:items-center lg:mx-8">
        {navList.map((nav) => (
          <Link
            key={nav.id}
            onClick={nav.onClick}
            to={nav.href}
            className={`${
              darkMode
                ? "text-gray-200 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-400"
            } px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0`}>
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavItem;
