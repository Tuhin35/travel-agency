import React, { useContext } from 'react';
import Header from '../header/Header';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import useAdmin from '../../hooks/UseAdmin';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content"> 


            <Outlet></Outlet>
            </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
     {
      isAdmin && 
      <>
       <li><Link to='/dashboard'>All Appointment</Link></li>
      <li><Link to='/dashboard/users'>All User</Link></li>
      </>
     }
  
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;