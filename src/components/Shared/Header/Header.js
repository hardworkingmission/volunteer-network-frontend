import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png'

const Header = () => {
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
                                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item pr-2 mb-2">
                                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/donation'>Donation</Link>
                                    </li>
                                    <li className="nav-item pr-2 mb-2">
                                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/events'>Events</Link>
                                    </li>
                                    <li className="nav-item pr-2 mb-2">
                                        <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to='/events'>Blog</Link>
                                    </li>
                                </ul>
                            {/* <!-- Left links --> */}
                        </div>
                        {/* <!-- Collapsible wrapper --> */}
                    </div>
            </nav>
            <div className="title text-center my-3">
                <h3 className='text-3xl font-bold'>I grow by helping people in need.</h3>
            </div>
            <div className="search my-3">
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                        <button className="btn inline-block px-6 py-3 border border-2 text-white font-lg text-lg bg-blue-600 leading-tight uppercase rounded hover:bg-blue-400 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;