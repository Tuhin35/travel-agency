
import React from 'react';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import './App.css';
import Main from './Component/layout/Main';
import Blog from './Component/News/Blog';
import Contact from './Component/News/Contact';
// import Destination from './Component/News/Destination';

import Home from './Component/News/Home';


import ErrorPage from './Component/Errorpage/Errorpage';
import { Login } from './Component/Login/Login';
import { Signup } from './Component/Login/Signup';
import AllCard from './Component/Card/AllCard';
import CheckOut from './Component/News/CheckOut';
import Orders from './Component/Orders/Orders';
import PrivateRoutes from './Component/PrivateRoute/PrivateRoutes';


function App() {
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
          path:'/contact',
          element:<Contact></Contact>
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
          loader: ({params})=>fetch(`https://travel-agency-server-topaz.vercel.app/place/${params.id}`)
        }
        ,{
          path:'/orders',
          element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
        }


      ]
    }




  ])
  return (
    <div className="App text-black">

      <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
