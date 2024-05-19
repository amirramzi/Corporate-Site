import React from "react";

import SignBtn from "./SignBtn";
import DarkModeBtn from "./DarkModeBtn";
import NavToggle from "./NavToggle";


function NavBtn() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center divide-x-2 space-x-2 w-64 mt-4 lg:mt-0">
        <DarkModeBtn />
        <SignBtn />
      </div>
      <NavToggle />
    </div>
  );
}

export default NavBtn;
