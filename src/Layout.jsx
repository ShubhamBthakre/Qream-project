import React from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
      <>
        <div className="flex min-h-full">
          <Sidebar />
          <div className="flex flex-col w-full min-h-full">
            <Navbar />
            <div className="mt-1 p-1 md:p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Layout;