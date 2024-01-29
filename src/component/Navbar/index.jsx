import React, { useState } from "react";
import { FaRegUserCircle, FaChevronDown } from "react-icons/fa";
import { useBusinessContext } from "../../context/businessContext";

function Navbar() {
  const { activeNavbarTitle, isNavbarOpen } = useBusinessContext();
  const [isLogOptionVisible, setLogOptionVisible] = useState(false);

  return (
    <nav
      className={`flex items-center min-h-16 md:min-h-20  bg-light-blue overflow-hidden ${
        isNavbarOpen ? "ml-56 pl-8" : "ml-20"
      }`}
    >
      <div className="text-black w-full flex justify-between items-center px-4 md:px-12">
        <h2 className="text-xl md:text-2xl font-semibold font-poppins">
          {activeNavbarTitle}
        </h2>
        <div className="flex items-center gap-x-2 text-base md:text-lg relative">
          <FaRegUserCircle />
          <p className="font-medium font-poppins">Elon Musk</p>
          <div className="font-podkova">
            <FaChevronDown
              className={`cursor-pointer ${isLogOptionVisible?"rotate-180":"rotate-0"}`}
              onClick={() => setLogOptionVisible(!isLogOptionVisible)}
            />
            {/* <select
              id="dropdown"
              className={` bg-white text-sm absolute p-1 rounded-xl cursor-pointer${
                isLogOptionVisible ? "inline" : "invisible"
              }`}
            >
              <option value="logout" >logout</option>
            </select> */}

            <button className={`font-poppins text-base absolute right-0 p-1 rounded-xl cursor-pointer hover:bg-blue-200 ${
                isLogOptionVisible ? "inline" : "hidden"
              }`}>logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
