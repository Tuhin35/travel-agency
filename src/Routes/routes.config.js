
import React from 'react';
import { createBrowserRouter  } from 'react-router-dom';
import '../App.css';
import Main from '../Component/layout/Main';
import Blog from '../Component/Home/Blog';
// // import Destination from './Component/Home/Destination';

import Home from '../Component/Home/Home';
import Payment from '../Component/Orders/Payment'

import ErrorPage from '../Component/Errorpage/Errorpage';
import { Login } from '../Component/Login/Login';
import { Signup } from '../Component/Login/Signup';
import AllCard from '../Component/Card/AllCard';
import CheckOut from '../Component/Home/CheckOut';
import Orders from '../Component/Orders/Orders';
import PrivateRoutes from '../Component/PrivateRoute/PrivateRoutes';
import Dashboard from '../Component/Dashboard/Dashboard';
import DashboardLayout from '../Component/layout/DashboardLayout';
import MyAppointment from '../Component/Dashboard/MyAppointment';
import AllUsers from '../Component/Dashboard/AllUsers';
import AdminRoutes from '../Component/PrivateRoute/AdminRoutes';

const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
  
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/Places',
            element:<AllCard></AllCard>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
         
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signup',
            element:<Signup></Signup>
          },
          {
            path:'/checkout/:id',
            element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
            loader: ({params})=>fetch(`http://localhost:5000/place/${params.id}`)
          }
          ,{
            path:'/orders',
            element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
          },
          {
            path: "/payment/:id",
            element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
            loader:({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
        }
      
  
        ]
      },
      {
        path:'/dashboard',
        errorElement:<ErrorPage></ErrorPage>,
        element:<DashboardLayout></DashboardLayout>,
        children:[
           
            {
                path:'/dashboard',
                element:<AdminRoutes><MyAppointment></MyAppointment></AdminRoutes>
            },
            

            {
              path:'/dashboard/users',
              element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
          }
        ]
        
      }
    
])

export default router