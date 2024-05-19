import React, { useState } from "react";
import img1 from "../../assets/img/portfolio/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio/portfolio-2.jpg";
import img3 from "../../assets/img/portfolio/portfolio-3.jpg";
import img4 from "../../assets/img/portfolio/portfolio-4.jpg";
import img5 from "../../assets/img/portfolio/portfolio-5.jpg";
import img6 from "../../assets/img/portfolio/portfolio-6.jpg";
import img7 from "../../assets/img/portfolio/portfolio-7.jpg";
import img8 from "../../assets/img/portfolio/portfolio-8.jpg";
import img9 from "../../assets/img/portfolio/portfolio-9.jpg";
function PortfolioHome() {
  const [showFront, setShowFront] = useState(true);
  const [showBack, setShowBack] = useState(true);
  const [showSeo, setShowSeo] = useState(true);
  const [showU, setShowU] = useState(true);
  const showAllHandler = () => {
    setShowFront((showFront) => true);
    setShowBack((showBack) => true);
    setShowSeo((showSeo) => true);
    setShowU((showU) => true);
  };
  const showFrontHandler = () => {
    setShowFront((showFront) => true);
    setShowBack((showBack) => false);
    setShowSeo((showSeo) => false);
    setShowU((showU) => false);
  };
  const showBackHandler = () => {
    setShowFront((showFront) => false);
    setShowBack((showBack) => true);
    setShowSeo((showSeo) => false);
    setShowU((showU) => false);
  };
  const showSeoHandler = () => {
    setShowFront((showFront) => false);
    setShowBack((showBack) => false);
    setShowSeo((showSeo) => true);
    setShowU((showU) => false);
  };
  const showUHandler = () => {
    setShowFront((showFront) => false);
    setShowBack((showBack) => false);
    setShowSeo((showSeo) => false);
    setShowU((showU) => true);
  };
  const btnItem = [
    { id: 1, name: "All", handler: showAllHandler },
    { id: 2, name: "Frontend", handler: showFrontHandler },
    { id: 3, name: "Backend", handler: showBackHandler },
    { id: 4, name: "UI UX", handler: showSeoHandler },
    { id: 5, name: "Seo", handler: showUHandler },
  ];
  return (
    <div className="px-16 lg:px-52 my-8">
      <div className="text-center mt-8 mb-8">
        <h3 className="font-bold text-4xl">نمونه کارها </h3>
        <p className="text-xl mt-4">
          در نوبی خدمات طراحی تخصصی سایت کد نویسی سایت شما با بهترین تکنولوژی
          های روز دنیا انجام خواهد شد
        </p>
      </div>
      <div className="space-x-4 flex lg:justify-center py-4 overflow-x-scroll overscroll-x-contain  lg:overflow-auto">
        {btnItem.map((item) => (
          <button
            key={item.id}
            onClick={item.handler}
            className="px-6 py-2 bg-gray-800 text-gray-200 rounded-lg lg:rounded-full">
            {item.name}
          </button>
        ))}
      </div>
      <div
        className={`${
          showFront ? "block " : "hidden"
        } flex flex-col lg:flex-row justify-between`}>
        <img className="w-80 mt-4" src={img1} alt="" />
        <img className="w-80 mt-4" src={img2} alt="" />
        <img className="w-80 mt-4" src={img3} alt="" />
      </div>
      <div
        className={`${
          showBack ? "block" : "hidden"
        } flex flex-col lg:flex-row justify-between`}>
        <img className="w-80 mt-4" src={img4} alt="" />
        <img className="w-80 mt-4" src={img5} alt="" />
        <img className="w-80 mt-4" src={img6} alt="" />
      </div>
      <div
        className={`${
          showSeo ? "block" : "hidden"
        } flex flex-col lg:flex-row justify-between`}>
        <img className="w-80 mt-4" src={img7} alt="" />
        <img className="w-80 mt-4" src={img8} alt="" />
        <img className="w-80 mt-4" src={img9} alt="" />
      </div>
      <div
        className={`${
          showU ? "block" : "hidden"
        } flex flex-col lg:flex-row justify-between`}>
        <img className="w-80 mt-4" src={img1} alt="" />
        <img className="w-80 mt-4" src={img2} alt="" />
        <img className="w-80 mt-4" src={img3} alt="" />
      </div>
    </div>
  );
}

export default PortfolioHome;
