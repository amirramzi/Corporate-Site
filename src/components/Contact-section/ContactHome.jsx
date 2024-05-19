import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const ContactHome = forwardRef(function ContactHome(props, ref) {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  return (
    <div
      ref={ref}
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      } px-16 lg:px-52 py-10`}>
      <h2 className="text-center pb-10 text-4xl font-bold">تماس با ما</h2>
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
        <div
          className={`${
            darkMode ? "bg-slate-500 text-white" : "bg-white text-black"
          } w-full lg:w-1/3 text-right px-4 py-8 rounded-md`}>
          <h4 className="font-bold text-2xl text-center mb-4">
            راه های ارتباطی
          </h4>
          <div className="flex flex-col space-y-4">
            <a
              href="tel:+989123207123"
              className="hover:bg-gray-200 rounded-full hover:text-gray-800 pr-4">
              <span> شماره تماس : 09123207123 </span>
              <PhoneEnabledIcon className="text-gray-800" />
            </a>
            <a
              href="mailto:amirramzi9898@gmail.com"
              target="_blank"
              className="hover:bg-gray-200 rounded-full hover:text-gray-800 pr-4">
              <span className="truncate">amirramzi9898@gmail.com : ایمیل </span>
              <AlternateEmailIcon className="text-gray-800" />
            </a>
            <a
              href="https://t.me/amirramziii"
              target="_blank"
              className="hover:bg-gray-200 rounded-full hover:text-gray-800 pr-4">
              <span>@amirramziii : تلگرام </span>
              <TelegramIcon className="text-gray-800" />
            </a>
            <a
              href="https://t.me/amirramziii"
              target="_blank"
              className="hover:bg-gray-200 rounded-full hover:text-gray-800 pr-4">
              <span>@amirramziii : واتس اپ </span>
              <WhatsAppIcon className="text-gray-800" />
            </a>
          </div>
        </div>
        <div
          className={`${
            darkMode ? "bg-slate-500 text-white" : "bg-white text-black"
          }w-full lg:w-2/4 text-right px-10 py-4 rounded-md space-y-2 text-black`}>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:w-1/2">
              <label htmlFor="email">ایمیل</label>
              <input
                type="text"
                name="email"
                id="email"
                className=" border-2 border-gray-800 focus:ring-2 focus:ring-blue-600 rounded-md mt-2 py-1 text-right"
              />
            </div>
            <div className="flex flex-col mt-1 lg:mt-0">
              <label htmlFor="name">نام</label>
              <input
                type="text"
                name="name"
                id="name"
                className=" border-2 border-gray-800 focus:ring-2 focus:ring-blue-600 rounded-md mt-2 py-1 text-right"
              />
            </div>
          </div>
          <div className="w-full flex flex-col ">
            <label htmlFor="subject">موضوع</label>
            <input
              type="text"
              name="subject"
              id="subject"
            
              className=" border-2 border-gray-800 focus:ring-2 focus:ring-blue-600 rounded-md mt-2 py-1 text-right"
            />
          </div>
          <div className="w-full flex flex-col ">
            <label htmlFor="message">پیام</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              className=" border-2 border-gray-800 focus:ring-2 focus:ring-blue-600 rounded-md mt-2 py-1 text-right"></textarea>
          </div>
          <div className="flex justify-center py-6">
            <button className="  bg-gray-800 text-white px-8 py-2 rounded-md hover:bg-gray-700 ">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactHome;
