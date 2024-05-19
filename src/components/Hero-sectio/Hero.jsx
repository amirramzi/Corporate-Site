import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Hero() {
  return (
    <div className="bg-hero1 w-full mt-5 min-h-[500px] bg-repeat-space bg-contain px-16 lg:px-52">
      <div className="flex flex-col lg:flex-row text-right">
        <div className="w-full lg:w-1/2 bg-hero2 min-h-[500px] bg-no-repeat bg-center bg-contain "></div>
        <div className="w-full pt-12 sm:pr-16 lg:pr-0">
          <div>
            <h1 className="text-3xl font-bold">
              خدمات در کسری از ثانیه
              <br />
              در لحظه عمل کن
            </h1>
            <h2 className="mt-2 text-xl font-light">....اولین شرکت</h2>
          </div>
          <button className=" mt-8 bg-gray-800 text-white px-8 py-2 rounded-md hover:bg-gray-700 ">
            <ArrowBackIcon /> <span className="pl-2">شروع</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
