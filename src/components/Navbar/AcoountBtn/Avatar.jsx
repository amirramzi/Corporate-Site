import React from "react";
import AvatarImg from "../../../assets/img/profile.jpg";
function AccountAvatr(props) {
  return (
    <img
      className={`${
        props.className ?? "h-9 w-9"
      } inline-block  rounded-full ring-2 ml-4`}
      src={AvatarImg}
      alt=""
    />
  );
}

export default AccountAvatr;
