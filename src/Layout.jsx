import React from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import { useBusinessContext } from "./context/businessContext";


function Layout() {
  const {isNavbarOpen}=useBusinessContext()
    return (
      <>
        <div className="flex min-h-full">
          <Sidebar />
          <div className="flex flex-col w-full min-h-full overflow-hidden">
            <Navbar />
            <div className={`min-h-full mt-1 p-1 md:p-5 overflow-y-auto ${isNavbarOpen?'ml-72':'ml-20'}`}>
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Layout;