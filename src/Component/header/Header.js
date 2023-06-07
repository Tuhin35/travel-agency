import React, { useContext, useEffect } from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { FcNightPortrait } from 'react-icons/fc';
import { useState } from 'react';
import './header.css'

import { AuthContext } from '../Context/UserContext';
import useAdmin from '../../hooks/UseAdmin';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');
    const [isAdmin] = useAdmin(user?.email)
   
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="navbar   bg-gray-900">
                <div className="flex-1 ">
                    <Link to='/' className="btn btn-primary text-white normal-case text-xl">Travel and chill</Link>

                  

                   

                </div>

                <div className="flex-none gap-4 text-xl text-white ">

                    <Link to='/'> Home </Link>
                    <Link to='/Places'> All Place </Link>
                    <Link to='/orders'> Order </Link>
                  { isAdmin && <>
                    <Link to='/dashboard'> Dashboard </Link>
                    </>}
                    <Link to='/blog'> Blog </Link>


                    {
                        user?.email ?

                            <button onClick={logOut}><BiLogOut className="text-4xl" ></BiLogOut></button>
                            :
                            <Link
                                to="/signup"
                                className="inline-flex w-1/2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                Sign up
                            </Link>

                    }

            

                    {/*
                   <Link to='signup'> Sign up </Link>

                 <button>LogOut</button> */}

                </div>
                <label htmlFor='dashboard-drawer' tabIndex={2} className='btn btn-ghost lg:hidden'>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </label>
            </div>
    );
};

export default Header;