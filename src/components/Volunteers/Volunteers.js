import React from 'react';
import useVolunteers from '../../hooks/useVolunteers/useVolunteers';
import Volunteer from '../Volunteer/Volunteer';

const Volunteers = () => {
    const [volunteers]=useVolunteers()
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3'>
            {
                volunteers?.map(volunteer=><Volunteer key={volunteer._id} volunteer={volunteer}/>)
            }
            
        </div>
    );
};

export default Volunteers;