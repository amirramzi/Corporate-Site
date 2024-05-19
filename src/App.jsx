import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-sectio/Hero";
import AboutHome from "./components/About-section/AboutHome";
import ServiceHome from "./components/Service-section/ServiceHome";
import WarrantyHome from "./components/Warranty-section/WarrantyHome";
import PortfolioHome from "./components/Portfolio-section/PortfolioHome";
import ContactHome from "./components/Contact-section/ContactHome";
import Loading from "./components/ui/Loading";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";

export default function (props) {
  const blogs = useSelector((state) => state.toggle.darkMode);
  console.log(blogs);
  const contactRef = useRef();
  const aboutRef = useRef();
  const servicRef = useRef();
  const contactClickHAndler = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutClickHandler = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const servicClickHandler = () => {
    servicRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div>
        <Loading />
        <Navbar
          contactClick={contactClickHAndler}
          aboutClick={aboutClickHandler}
          servicClick={servicClickHandler}
        />
        <Hero />
        <AboutHome ref={aboutRef} />
        <ServiceHome ref={servicRef} />
        <WarrantyHome />
        <PortfolioHome />
        <ContactHome ref={contactRef} />
        <Footer
          contactClick={contactClickHAndler}
          aboutClick={aboutClickHandler}
          servicClick={servicClickHandler}
        />
      </div>
      <ToastContainer />
    </>
  );
}
