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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" }); // sm breakpoint

  useEffect(() => {
    if (isSmall) {
      setNavbarOpen(false);
    }
  }, [isSmall]);

  return (
    <div className="flex fixed h-full">
      <div
        className={`h-screen p-5 pt-8 bg-dark-purple relative ${
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
          className={`w-full flex flex-col md:flex-row text-white font-medium text-2xl md:text-4xl`}
        >
          <MdBusinessCenter
            color="white"
            className={`duration-500 ${isNavbarOpen && "hidden"} `}
          />
          <h1
            className={`origin-left  duration-300 ${
              !isNavbarOpen && "hidden"
            } font-podova`}
          >
            BetterBussiness
          </h1>
        </div>
        <div className="w-full min-h-full my-4 md:my-8 text-lg md:text-xl">
          <ul className="w-full m-0 p-0 flex flex-col gap-2 text-white font-medium font-poppins text-base md:text-xl">
            <li className="border-b-2 p-4 pl-0 border-inherit cursor-pointer hover:text-blue-200">
              <NavLink to="/" className={`no-underline`}>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setActiveNavbarTitle("Dashboard")}
                >
                  <RxDashboard className={`${isNavbarOpen && "hidden"}`} />
                  <p className={`${!isNavbarOpen && "hidden"}`}>Dashboard</p>
                </div>
              </NavLink>
            </li>
            <li className="border-b-2 p-4 pl-0 border-inherit cursor-pointer hover:text-blue-200">
              <NavLink to="/registered-business" className={`no-underline`}>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setActiveNavbarTitle("Business Registered")}
                >
                  <GiArchiveRegister
                    className={`${isNavbarOpen && "hidden"}`}
                  />
                  <p className={`${!isNavbarOpen && "hidden"}`}>
                    Registered Business
                  </p>
                </div>
              </NavLink>
            </li>
            <li className="border-b-2 p-4 pl-0 border-inherit cursor-pointer hover:text-blue-200">
              <NavLink to="/documents" className={`no-underline`}>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => setActiveNavbarTitle("Documents")}
                >
                  <IoDocumentsOutline
                    className={`${isNavbarOpen && "hidden"}`}
                  />
                  <p className={`${!isNavbarOpen && "hidden"}`}>Document</p>
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
