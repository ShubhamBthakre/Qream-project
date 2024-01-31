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

      <Route
        path="registered-business/registered-business/details/:applicationId"
        element={<RegisteredBusinessTableItemDetails />}
      />
      <Route path="documents" element={<Documents />} />
    </Route>
  )
);

function App() {
  // Get the stored state from localStorage
  let initialState = localStorage.getItem("myState");
  console.log("initialState", initialState);

  if (initialState) {
    // Parse the stored state if it exists
    initialState = JSON.parse(initialState);
  } else {
    // Set a default initial state if no stored state is found
    initialState = {
      isNavbarOpen: true,
      activeNavbarTitle: "Dashboard",
    };
  }

  // Use the state hook to manage the state
  let [myState, setMyState] = useState(initialState);
  console.log("myState", myState);

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("myState", JSON.stringify(myState));
    console.log("myState", myState);
  }, [myState]);

  const [activeNavbarTitle, setTitle] = useState(myState.activeNavbarTitle);
  const [data, setData] = useState(null);
  const [isNavbarOpen, setOpen] = useState(myState.isNavbarOpen);

  const setActiveNavbarTitle = (title) => {
    setTitle(title);
    setMyState({ ...myState, activeNavbarTitle: title });
  };

  const setItemDetails = (data) => {
    setData(data);
  };

  const setNavbarOpen = (isNavbarOpen) => {
    setOpen(isNavbarOpen);
    setMyState({ ...myState, isNavbarOpen: isNavbarOpen });
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
