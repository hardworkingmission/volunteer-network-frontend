import React from 'react';
import useVolunteerServices from '../../hooks/useVolunteerServices/useVolunteerServices'
import VolunteerService from '../VolunteerService/VolunteerService';

const VolunteerServices = () => {
    const [volunteerServices]=useVolunteerServices()
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3'>
            {
                volunteerServices?.map(volunteerService=><VolunteerService key={volunteerService._id} volunteerService={volunteerService}/>)
            }
            
        </div>
    );
};

export default VolunteerServices;