import React, { forwardRef, useState } from "react";
import features1 from "../../assets/img/features/uiux.png";
import features2 from "../../assets/img/features/front.png";
import features3 from "../../assets/img/features/back.png";
import features4 from "../../assets/img/features/seo.png";
const ServiceHome = forwardRef(function ServiceHome(porps, ref) {
  const [img, setImg] = useState(features1);

  return (
    <>
      <div
        ref={ref}
        className="w-full px-16 lg:px-52 text-center text-gray-800 mt-8 mb-8">
        <h2 className="text-4xl font-bold">خدمات</h2>
        <p className="text-xl mt-4">
          در نوبی خدمات طراحی تخصصی سایت کد نویسی سایت شما با بهترین تکنولوژی
          های روز دنیا انجام خواهد شد
        </p>
      </div>
      <div className="w-full px-16 lg:px-52 flex flex-col items-center lg:flex-row">
        <div className="w-full lg:w-1/2 mt-8">
          <img src={img} alt="" />
        </div>
        <div className="w-full lg:w-1/2 mt-8">
          <button
            onClick={() => setImg(features1)}
            className="text-right px-4 py-3 border-r-4 border-gray-200 focus:border-gray-800 focus:bg-gray-200 ">
            <h3 className="font-bold text-md">UI UX | خدمات طراحی سایت</h3>
            <p>
              در نوب ،تیم مجرب و متخصص در طراحی زیبا و بهنه سایت شما را همراحی
              میکنند
            </p>
          </button>
          <button
            onClick={() => setImg(features2)}
            className="text-right px-4 py-3 border-r-4 border-gray-200 focus:border-gray-800 focus:bg-gray-200 ">
            <h3 className="font-bold text-md">
              React.js Next.js | خدمات کد نویسی فرانت سایت
            </h3>
            <p>
              در نوب ،تیم مجرب و متخصص در طراحی زیبا و بهنه سایت شما را همراحی
              میکنند
            </p>
          </button>
          <button
            onClick={() => setImg(features3)}
            className="text-right px-4 py-3 border-r-4 border-gray-200 focus:border-gray-800 focus:bg-gray-200 ">
            <h3 className="font-bold text-md">
              Node.js Express.js Mongo DB | خدمات کد نوبسی بکند سایت
            </h3>
            <p>
              در نوب ،تیم مجرب و متخصص در طراحی زیبا و بهنه سایت شما را همراحی
              میکنند
            </p>
          </button>
          <button
            onClick={() => setImg(features4)}
            className="text-right px-4 py-3 border-r-4 border-gray-200 focus:border-gray-800 focus:bg-gray-200 ">
            <h3 className="font-bold text-md">Seo | خدمات سیٌو سایت</h3>
            <p>
              در نوب ،تیم مجرب و متخصص در طراحی زیبا و بهنه سایت شما را همراحی
              میکنند
            </p>
          </button>
        </div>
      </div>
    </>
  );
});

export default ServiceHome;
