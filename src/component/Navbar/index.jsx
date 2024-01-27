import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useBusinessContext } from "../../context/businessContext";

function Navbar() {
  const { activeNavbarTitle, isNavbarOpen } = useBusinessContext();
  return (
    <nav
      className={`flex items-center min-h-16 md:min-h-20  bg-light-blue ${
        isNavbarOpen ? "ml-72" : "ml-20"
      }`}
    >
      <div className="text-black w-full flex justify-between items-center px-4 md:px-12 font-poppins">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {activeNavbarTitle}
        </h2>
        <div className="flex items-center gap-x-2 text-base md:text-xl">
          <FaRegUserCircle />
          <p className="font-medium ">Elon Musk</p>
          <select id="dropdown" className=" bg-light-blue">
            <option value="#"></option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
