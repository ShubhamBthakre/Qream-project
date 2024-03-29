import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import controlImg from "../../assets/control.png";
import { MdBusinessCenter } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GiArchiveRegister } from "react-icons/gi";
import { IoDocumentsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useBusinessContext } from "../../context/businessContext";

function Sidebar() {
  const { setActiveNavbarTitle, isNavbarOpen, setNavbarOpen } =
    useBusinessContext();
  const isSmall = useMediaQuery({ query: "(max-width: 800px)" }); // sm breakpoint

  useEffect(() => {
    if (isSmall) {
      setNavbarOpen(false);
    } else {
      setNavbarOpen(true);
    }
  }, [isSmall]);

  return (
    <div className="flex fixed h-full">
      <div
        className={`h-screen bg-dark-purple relative ${
          isNavbarOpen ? "w-62" : "w-20"
        }`}
      >
        <img
          src={controlImg}
          className={`absolute cursor-pointer -right-3 top-9 w-5 border-2  border-dark-purple rounded-full ${
            !isNavbarOpen && "rotate-180"
          }`}
          onClick={() => setNavbarOpen(!isNavbarOpen)}
        />

        <div
          className={`min-h-16 md:min-h-20 w-full flex justify-center items-center border-b-[1px] text-white font-medium text-2xl md:text-4xl`}
        >
          <MdBusinessCenter
            color="white"
            className={`duration-500 ${isNavbarOpen && "hidden"} `}
          />
          <h1
            className={`origin-left  duration-300 px-5 text-2xl ${
              !isNavbarOpen && "hidden"
            } font-mitr`}
          >
            BetterBussiness
          </h1>
        </div>
        <div className="w-full min-h-full my-4 md:my-8 text-lg md:text-xl ">
          <ul className="w-full m-0 p-0 flex flex-col gap-2 text-white font-medium text-base md:text-xl  px-5">
            <li className="border-b-[1px] p-4 pl-0 border-inherit cursor-pointer hover:text-blue-200 ">
              <NavLink to="/" className={`no-underline`}>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setActiveNavbarTitle("Dashboard")}
                >
                  <RxDashboard className={`${isNavbarOpen && "hidden"}`} />
                  <p className={`${!isNavbarOpen && "hidden"} font-poppins`}>
                    Dashboard
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="border-b-[1px] p-4 pl-0 border-inherit cursor-pointer hover:text-blue-200 ">
              <NavLink to="/registered-business" className={`no-underline`}>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setActiveNavbarTitle("Business Registered")}
                >
                  <GiArchiveRegister
                    className={`${isNavbarOpen && "hidden"}`}
                  />
                  <p className={`${!isNavbarOpen && "hidden"} font-poppins`}>
                    Registered Business
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="p-4 pl-0  cursor-pointer hover:text-blue-200 ">
              <NavLink to="/documents" className={`no-underline`}>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setActiveNavbarTitle("Documents")}
                >
                  <IoDocumentsOutline
                    className={`${isNavbarOpen && "hidden"}`}
                  />
                  <p className={`${!isNavbarOpen && "hidden"} font-poppins`}>
                    Document
                  </p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
