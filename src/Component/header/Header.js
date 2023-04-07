import React from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar   bg-sky-600">
                <div className="flex-1 ">
                    <Link to='/' className="btn btn-ghost  normal-case text-xl">Travel with Tuhin</Link>
                   
                            <div className="w-20 rounded-full m-2">
                                <img src={logo} />
                            </div>

                            <div className="form-control ">
                        <input  type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                       
                </div>
                
                <div className="flex-none gap-4 text-xl text-white ">
                    
                   <Link to='/'> News </Link>
                   <Link to='allCart'> All Place </Link>
                   <Link to='blog'> Blog </Link>
                   <Link to='contact'> Contact </Link>
                   <Link to='login'> Login </Link>
                   <Link to='signup'> Sign up </Link>

                 <button>LogOut</button>
                    
                </div>
            </div>

        </div>
    );
};

export default Header;