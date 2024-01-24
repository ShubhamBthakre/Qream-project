import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="mx-10 h-full mt-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
