import React from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerService = ({volunteerService}) => {
    const navigate=useNavigate()
    const {img,name,_id}=volunteerService
    return (
        <div className='col relative'>
            <img src={process.env.PUBLIC_URL+`/images/${img}`} alt="" />
            <button className='py-2 px-2 flex items-center justify-center bg-blue-600 rounded-lg w-full text-white text-xl font-bold absolute bottom-0' onClick={()=>navigate(`/checkout/${_id}`)}>{name}</button>
        </div>
    );
};

export default VolunteerService;