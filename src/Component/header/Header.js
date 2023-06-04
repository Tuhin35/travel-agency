import React, { useContext, useEffect } from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { FcNightPortrait } from 'react-icons/fc';
import { useState } from 'react';
import './header.css'

import { AuthContext } from '../Context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <div className="navbar   bg-sky-600">
                <div className="flex-1 ">
                    <Link to='/' className="btn btn-ghost  normal-case text-xl">Travel with Tuhin</Link>

                    <div className="w-20 rounded-full m-2">
                        <img src={logo} />
                    </div>

                   

                </div>

                <div className="flex-none gap-4 text-xl text-white ">

                    <Link to='/'> Home </Link>
                    <Link to='Places'> All Place </Link>
                    <Link to='orders'> Order </Link>
                    <Link to='blog'> Blog </Link>


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

                    <div className={`App ${theme}`}>
                        <button onClick={toggleTheme}> <FcNightPortrait></FcNightPortrait> </button>

                    </div>

                    {/*
                   <Link to='signup'> Sign up </Link>

                 <button>LogOut</button> */}

                </div>
            </div>

        </div>
    );
};

export default Header;