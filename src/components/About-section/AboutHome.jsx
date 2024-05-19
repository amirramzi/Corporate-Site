import React, { forwardRef } from "react";

import { useSelector } from "react-redux";
import imgAbout1 from "../../assets/img/about/About-us.png";
import imgAbout2 from "../../assets/img/about/About-us2.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const AboutHome = forwardRef((props, ref) => {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  return (
    <div ref={ref} className={`${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className=" lg:px-52 w-full mt-12 lg:mt-0">
        <div className="flex flex-col md:flex-row  py-6 ">
          <div className="px-16 w-full lg:w-1/3 lg:px-4 lg:py-6 ">
            <img
              className="rounded-lg"
              src={darkMode ? imgAbout2 : imgAbout1}
              alt=""
            />
          </div>
          <div
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-right px-16 w-full lg:w-2/3  lg:px-8 lg:py-6`}>
            <h3 className="text-3xl font-bold	">.... درباره ی ما</h3>
            <p className="mt-4 text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <ul className="mt-4 text-lg">
              <li>
                <span className="pr-3">سرعت و بهینه شدن فرآیند</span>
                <TaskAltIcon className="text-green-500" />
              </li>
              <li>
                <span className="pr-3">کاهش هزینه ها و بالا رقتن درآمد</span>
                <TaskAltIcon className="text-green-500" />
              </li>
              <li>
                <span className="pr-3">
                  در هر زمان و هر مکان نیرو کار مجرب خود را داشته باش
                </span>
                <TaskAltIcon className="text-green-500" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutHome;
