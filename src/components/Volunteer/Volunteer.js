import React from 'react';

const Volunteer = ({volunteer}) => {
    const {img,name}=volunteer
    return (
        <div className='col relative'>
            <img src={process.env.PUBLIC_URL+`/images/${img}`} alt="" />
            <button className='py-2 px-2 flex items-center justify-center bg-blue-600 rounded-lg w-full text-white text-xl font-bold absolute bottom-0'>{name}</button>
        </div>
    );
};

export default Volunteer;