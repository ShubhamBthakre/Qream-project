import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import RegisteredBusiness from "./component/RegisteredBusiness";
import Documents from "./component/Documents";
import { BusinessContextProvider } from "./context/businessContext";
import React, { useState } from "react";
import RegisteredBusinessTableItemDetails from "./component/RegisteredBusinessTableItemDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="registered-business" element={<RegisteredBusiness />} />
      <Route path="documents" element={<Documents />} />
      <Route
        path="registered-business-Item-details"
        element={<RegisteredBusinessTableItemDetails />}
      />
    </Route>
  )
);

function App() {
  const [activeNavbarTitle, setTitle] = useState("Dashboard");
  const [data, setData] = useState(null);
  const [isNavbarOpen,setOpen]=useState(true)

  const setActiveNavbarTitle = (title) => {
    setTitle(title);
  };

  const setItemDetails = (data) => {
    setData(data);
  };

  const setNavbarOpen=(isNavbarOpen)=>{
    setOpen(isNavbarOpen)
  }

  return (
    <BusinessContextProvider
      value={{
        activeNavbarTitle,
        setActiveNavbarTitle,
        setItemDetails,
        setNavbarOpen,
        isNavbarOpen,
      }}
    >
      <RouterProvider router={router} />
    </BusinessContextProvider>
  );
}

export default App;
