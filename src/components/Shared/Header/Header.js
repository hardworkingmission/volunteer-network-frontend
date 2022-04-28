import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png'
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../../firebase.init';
import {onAuthStateChanged,signOut } from "firebase/auth";

const Header = () => {
    const [currentUser,setCurrentUser]=useState({})
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate()
    //const user=auth.currentUser
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                //navigate('/')
            }
    
        })

    },[])
    const handleSignOut=()=>{
        signOut(auth)
          .then(()=>{
              currentUser.uid=''
              setCurrentUser({...currentUser})
              //navigate('/login')
          })
    }

    return (
        <header className='w-full mx-auto'>
            <nav className="
                relative
                w-5/6
                mx-auto
                flex flex-wrap
                items-center
                justify-between
                py-4
                bg-transparant
                text-gray-500
                hover:text-gray-700
                focus:text-gray-700
                navbar navbar-expand-lg
                ">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                        <button className="
                            navbar-toggler
                            text-gray-500
                            border-0
                            hover:shadow-none hover:no-underline
                            py-2
                            px-2.5
                            bg-transparent
                            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                        " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                        </svg>
                        </button>
                        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                            <Link className="text-xl text-black" to='/'>
                                <img src={logo} alt="" className='w-[200px] h-[60px]'/>
                            </Link>
                            {/* <!-- Left links --> */}
                                <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
                                    <li className="nav-item px-2 mb-2">
                                        <CustomLink className="nav-link active" aria-current="page" to='/'>Home</CustomLink>
                                    </li>
                                    <li className="nav-item pr-2 mb-2">
                                        <CustomLink className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/events'>Events</CustomLink>
                                    </li>
                                    <li className="nav-item pr-2 mb-2">
                                        <CustomLink className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/admin'>Admin</CustomLink>
                                    </li>
                                    {
                                        currentUser?.uid?<button className='bg-blue-600 rounded px-2 py-1 font-bold text-white' onClick={handleSignOut}>Sign Out</button>:
                                        <li className="nav-item pr-2 mb-2">
                                            <CustomLink className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/login'>LogIn</CustomLink>
                                       </li>
                                    }
                                </ul>
                            {/* <!-- Left links --> */}
                        </div>
                        {/* <!-- Collapsible wrapper --> */}
                    </div>
            </nav>
            
        </header>
    );
};

export default Header;