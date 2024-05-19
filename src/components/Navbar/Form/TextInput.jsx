import React from "react";
import { Field } from "formik";

function TextInput(props) {
  return (
    <div className="flex flex-row-reverse items-center mb-6">
      <div className="w-1/4">
        <label
          className="block text-gray-500 font-bold text-right mb-1  pr-2"
          htmlFor={props?.htmlFor}>
          {props?.label}
        </label>
      </div>
      <div className="w-3/4">
        <Field
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-600 text-right"
          {...props}
        />
      </div>
    </div>
  );
}

export default TextInput;
