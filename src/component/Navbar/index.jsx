import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useBusinessContext } from "../../context/businessContext";

function Navbar() {
  const businessData = useBusinessContext();
  return (
    <nav className="flex items-center min-h-16 md:min-h-20 w-full  bg-light-blue">
      <div className="text-black w-full flex justify-between items-center px-4 md:px-12 font-poppins">
        <h2 className="text-2xl md-text-3xl font-semibold">
          {businessData.activeNavbarTitle}
        </h2>
        <div className="flex items-center gap-x-2">
          <FaRegUserCircle />
          <p className="font-medium  text-base md:text-lg">Elon Musk</p>
          <select id="dropdown" className=" bg-light-blue">
            <option value="#"></option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
