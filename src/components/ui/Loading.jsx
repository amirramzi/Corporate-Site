import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

function Loading() {
  const loading = useSelector((state) => state.toggle.loading);
  return (
    <div
      className={`${
        loading ? "flex" : "hidden"
      } fixed  justify-center items-center w-screen h-screen z-20 bg-myBg`}>
      <PacmanLoader color="#36d7b7" loading={loading} />
    </div>
  );
}

export default Loading;
