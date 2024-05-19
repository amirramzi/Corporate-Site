import React from "react";
import { useSelector } from "react-redux";
import SignUpModal from "./Modal/SignUpModal";
import SignInModal from "./Modal/SignInModal";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import withAuth from "../Disgn-Pattern/withAuth";
import DropDown from "./AcoountBtn/DropDown";

function SignBtn() {
  return (
    <div className="flex items-center w-full">
      <SignUpModal
        openText="ثبت نام"
        title={
          <>
            <span>ثبت نام</span> <AssignmentIndIcon />
          </>
        }
      />

      <SignInModal
        openText="ورود"
        title={
          <>
            <span>ورود</span> <AssignmentIndIcon />
          </>
        }
      />
    </div>
  );
}

export default withAuth(DropDown, SignBtn);
