import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useSelector } from "react-redux";
function FileInput() {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  return (
    <div className="flex flex-row-reverse items-center mb-6 ">
      <div className="w-1/4">
        <label
          htmlFor="file"
          className={`${
            darkMode ? "text-gray-300" : "text-gray-500"
          } block text-gray-500 font-bold text-right mb-1  pr-2`}>
          انتخاب عکس
        </label>
      </div>

      <div className="w-3/4">
        <label
          htmlFor="dropzone-file"
          className={`${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-300"
          } flex flex-col items-center w-full  p-5 mx-auto mt-2 text-center  border-2  border-dashed cursor-pointer rounded-xl`}>
          <CloudUploadOutlinedIcon />

          <h2
            className={`${
              darkMode ? "text-gray-200" : "text-gray-700"
            } mt-1 font-medium tracking-wide`}>
            Payment File
          </h2>

          <p
            className={`${
              darkMode ? "text-gray-500" : "text-gray-400"
            } mt-2 text-xs tracking-wide`}>
            Upload or darg & drop your file SVG, PNG, JPG or GIF.
          </p>

          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}

export default FileInput;
