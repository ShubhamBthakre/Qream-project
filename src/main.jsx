import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './component/Dashboard/index.jsx'
import RegisteredBusiness from './component/RegisteredBusiness/index.jsx'
import Documents from './component/Documents/index.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Dashboard/>}/>
      <Route path='/registered-business' element={RegisteredBusiness}/>
      <Route path='/documents' element={Documents}/>
    </Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
