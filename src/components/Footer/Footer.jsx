import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Footer(props) {
  const darkMode = useSelector((state) => state.toggle.darkMode);
  const socialMedia = [
    { id: 1, name: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
    { id: 2, name: "Instagram", icon: <InstagramIcon />, href: "#" },
    { id: 3, name: "GitHub", icon: <GitHubIcon />, href: "#" },
  ];
  const homeList = [
    { id: 1, name: "درباره ما", onclick: props.aboutClick },
    { id: 2, name: "خدمات", onclick: props.servicClick },
    { id: 3, name: "تماس با ما", onclick: props.contactClick },
  ];
  const blogList = [
    { id: 1, name: "آموزش", href: "/teach" },
    { id: 2, name: "اضافه کردن مقاله ", href: "/dashboard/blogs-add" },
    { id: 3, name: "مدیریت مقاله ها", href: "/dashboard/blogs-mange" },
  ];
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-200 border-gray-50"
      } pt-5 text-right border-t `}>
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link to={"/"}>
                <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                />
              </Link>

              <div className="flex mt-6 -mx-2 ">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className={`${
                      darkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    }  mx-2  transition-colors duration-300`}
                    aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div>
                <h3
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  } uppercase`}>
                  خانه
                </h3>
                {homeList.map((list) => (
                  <Link
                    key={list.id}
                    onClick={list.onclick}
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } block mt-2 text-sm hover:underline`}>
                    {list.name}
                  </Link>
                ))}
              </div>

              <div>
                <h3
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  }  uppercase`}>
                  مقاله
                </h3>
                {blogList.map((list) => (
                  <Link
                    key={list.id}
                    to={list.href}
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } block mt-2 text-sm hover:underline`}>
                    {list.name}
                  </Link>
                ))}
              </div>

              <div>
                <h3
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  }  uppercase `}>
                  تماس
                </h3>
                <a
                  href="tel:+989123207123"
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } block mt-2 text-sm hover:underline`}>
                  +98 912 320 7123
                </a>
                <span
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } block mt-2 text-sm hover:underline`}>
                  amirramzi9898@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr
          className={`${
            darkMode ? "bg-gray-700" : "bg-gray-50"
          } h-px my-6  border-none`}
        />

        <div>
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-500"
            } text-center`}>
            © Brand 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
