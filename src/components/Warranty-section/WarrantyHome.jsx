import React from "react";
import { useSelector } from "react-redux";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
function WarrantyHome() {
  const darkMode = useSelector((state) => state.toggle.darkMode);

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black "
        } pb-8 mt-8`}>
        <div className="w-full px-16 lg:px-52 text-center py-6">
          <h2 className="text-4xl font-bold">ضمانت</h2>
          <p className="text-xl mt-4">
            در نوبی خدمات طراحی تخصصی سایت کد نویسی سایت شما با بهترین تکنولوژی
            های روز دنیا انجام خواهد شد
          </p>
        </div>
        <div className="x-16 lg:px-52 flex flex-col items-center  md:flex-row md:space-x-6">
          <div className=" mt-8 w-64 bg-blue-600 rounded-md">
            <div
              className={`${
                darkMode ? "bg-slate-500 " : "bg-white"
              } w-full flex flex-col items-center rounded-md px-6 py-8 transition-all duration-500	 hover:-translate-y-4`}>
              <GavelIcon className="text-blue-600" fontSize="large" />
              <div className="text-center">
                <h4 className="font-bold text-2xl mt-1 text-blue-600">
                  قرار داد
                </h4>
                <p className="mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است،
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 w-64 bg-yellow-600 rounded-md">
            <div
              className={`${
                darkMode ? "bg-slate-500 " : "bg-white"
              } w-full flex flex-col items-center rounded-md px-6 py-8 transition-all duration-500	 hover:-translate-y-4`}>
              <SecurityIcon className="text-yellow-600" fontSize="large" />
              <div className="text-center">
                <h4 className="font-bold text-2xl mt-1 text-yellow-600">
                  امنیت بالای سایت
                </h4>
                <p className="mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است،
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 w-64 bg-red-600 rounded-md ">
            <div
              className={`${
                darkMode ? "bg-slate-500 " : "bg-white"
              } w-full flex flex-col items-center rounded-md px-6 py-8 transition-all duration-500	 hover:-translate-y-4`}>
              <ElectricBoltIcon className="text-red-600" fontSize="large" />
              <div className="text-center">
                <h4 className="font-bold text-2xl mt-1 text-red-600">
                  سرعت بالای سایت
                </h4>
                <p className="mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است،
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 w-64 bg-green-600 rounded-md">
            <div
              className={`${
                darkMode ? "bg-slate-500 " : "bg-white"
              } w-full flex flex-col items-center rounded-md px-6 py-8 transition-all duration-500	 hover:-translate-y-4`}>
              <SupportAgentIcon className="text-green-600" fontSize="large" />
              <div className="text-center">
                <h4 className="font-bold text-2xl mt-1 text-green-600">
                  پشتیبانی
                </h4>
                <p className="mt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است،
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarrantyHome;
