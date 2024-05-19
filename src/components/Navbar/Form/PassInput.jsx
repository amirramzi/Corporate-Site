import React, { useState } from "react";
import { Field } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function PassInput(props) {
  const [passType, setPassType] = useState(true);
  const passTypeHandler = () => {
    setPassType(!passType);
  };
  return (
    <div className="flex flex-row-reverse items-center mb-6">
      <div className="w-1/4">
        <label
          className="block text-gray-500 font-bold text-right mb-1  pr-2"
          htmlFor={props?.htmlFor}>
          {props?.label}
        </label>
      </div>
      <div className="w-3/4 relative flex items-center">
        <Field
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600 text-right"
          type={passType ? "password" : "text"}
          {...props}
        />
        <button
          type="button"
          onClick={passTypeHandler}
          className="absolute left-4 text-gray-800">
          {passType ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      </div>
    </div>
  );
}

export default PassInput;
