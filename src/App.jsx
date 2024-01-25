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
import React,{useState} from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="/registered-business" element={<RegisteredBusiness/>} />
      <Route path="/documents" element={<Documents/>} />
    </Route>
  )
);

function App() {

    const[activeNavbarTitle, setTitle]=useState("Dashboard")

    const setActiveNavbarTitle=(title)=>{
      setTitle(title)
    }

  return (
    <BusinessContextProvider
      value={{ activeNavbarTitle, setActiveNavbarTitle }}
    >
      <RouterProvider router={router} />
    </BusinessContextProvider>
  );
}

export default App;
