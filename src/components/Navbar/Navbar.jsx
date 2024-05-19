import React, { memo, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import NavItem from "./NavItem";
import NavBtn from "./NavBtn";

function Navbar(props) {
  // const [isSticky, setIsSticky] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsSticky(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  const darkMode = useSelector((state) => state.toggle.darkMode);

  return (
    <>
      <nav
        className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} 
       sticky top-0 shadow z-50`}>
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <NavBtn />
            <NavItem
              aboutClick={props?.aboutClick}
              servicClick={props?.servicClick}
              contactClick={props?.contactClick}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
