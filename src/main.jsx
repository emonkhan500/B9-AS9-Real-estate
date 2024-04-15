import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Error from './Components/Error/Error';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Extra from './Components/ExtraToute/Extra';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/update',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:'/details/:id',
        loader:()=>fetch(`/estate.json`),
        element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>
      },
      {
        path:'/extra',
        element:<PrivateRoute><Extra></Extra></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
