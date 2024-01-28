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
import React, { useState, useEffect } from "react";
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
 


  let initialState = JSON.parse(localStorage.getItem("myState"));

  if (!initialState) {
    initialState = {
      isNavbarOpen: true,
      activeNavbarTitle: "Dashboard",
    };
  }

  console.log("initialState", initialState);

  
  let [myState, setMyState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("myState", JSON.stringify(initialState));
    console.log("myState",myState)
  }, [myState]);


  const [activeNavbarTitle, setTitle] = useState(initialState.activeNavbarTitle);
  const [data, setData] = useState(null);
  const [isNavbarOpen, setOpen] = useState(initialState.isNavbarOpen);
 

  const setActiveNavbarTitle = (title) => {
    setTitle(title);
    setMyState({...myState,activeNavbarTitle:title})
    
  };

  const setItemDetails = (data) => {
    setData(data);
  };

  const setNavbarOpen = (isNavbarOpen) => {
    setOpen(isNavbarOpen);
    setMyState({...myState,isNavbarOpen:isNavbarOpen})
    
  };

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
