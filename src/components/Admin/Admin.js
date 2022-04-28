import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faUsers } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../CustomLink/CustomLink';

const Admin = () => {
    return (
        <div className='w-5/6 mx-auto md:flex'>
            <div className="lg:w-3/12 md:w-4/12 w-full">
                <nav className='w-full p-2'>
                    <ul>
                        <li>
                            <CustomLink to={'/admin/volunteerlist'}><FontAwesomeIcon icon={faUsers}/>Volunteer Register List</CustomLink>
                        </li>
                        <li>
                            <CustomLink to={'/admin/addevent'}><FontAwesomeIcon icon={faPlus}/>Add Event</CustomLink>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="lg:w-9/12 md:w-8/12 w-full bg-gray-100 mx-auto p-2">
                     
                    <Outlet/>
            </div>
            
        </div>
    );
};

export default Admin;