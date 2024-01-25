import React, { useState } from "react";
import controlImg from "../../assets/control.png";
import { MdBusinessCenter } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GiArchiveRegister } from "react-icons/gi";
import { IoDocumentsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useBusinessContext } from "../../context/businessContext";

function Sidebar() {
  const [open, setopen] = useState(true);

  const {setActiveNavbarTitle}=useBusinessContext()

  const setDashboardTitle=()=>{
    setActiveNavbarTitle("Dashboard")
  }

  const setBusinessRegisteredTitle=()=>{
    setActiveNavbarTitle("Business Registered")

  }

  const setDocumentsTitle=()=>{
    setActiveNavbarTitle("Documents")

  }

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-62" : "w-20"
        } h-screen p-5 pt-8 bg-dark-purple relative `}
      >
        <img
          src={controlImg}
          className={`absolute cursor-pointer -right-3 top-9 w-5 border-2  border-dark-purple rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setopen(!open)}
        />

        <div
          className={`flex gap-x-2 text-white items-center font-medium text-4xl`}
         
        >
          <MdBusinessCenter color="white" className="duration-500 " />
          <h1
            className={`origin-left  duration-300 ${
              !open && "hidden"
            } font-podova`}
          >
            BetterBussiness
          </h1>
        </div>
        <div className="mt-8">
          <ul className="flex flex-col gap-x-2 text-white font-medium font-poppins">
            <li className="m-2 border-b-2 p-4 pl-0 border-inherit cursor-pointer">
              <NavLink to="/">
                <div className="flex items-center gap-x-2"  onClick={()=>setDashboardTitle()}>
                  <RxDashboard />
                  <p className={`${!open && "hidden"}`}>Dashboard</p>
                </div>
              </NavLink>
            </li>
            <li className=" m-2 border-b-2 p-4 pl-0 border-inherit cursor-pointer">
              <NavLink to="/registered-business">
                <div className="flex items-center gap-x-2" onClick={()=>setBusinessRegisteredTitle()}>
                  <GiArchiveRegister />
                  <p className={`${!open && "hidden"}`}>Registered Business</p>
                </div>
              </NavLink>
            </li>
            <li className="m-2 border-b-2 p-4 pl-0 border-inherit cursor-pointer">
              <NavLink to="/documents" className={""}>
                <div className="flex items-center gap-x-2" onClick={()=>setDocumentsTitle()}>
                  <IoDocumentsOutline />
                  <p className={`${!open && "hidden"}`}>Document</p>
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
