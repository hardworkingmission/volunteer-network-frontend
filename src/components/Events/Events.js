import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const email='sshakil496@gmail.com'
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/event?email=${email}`)
             .then(res=>{
                 setEvents(res.data)
             })

    },[])
    const deleteEvent=(id)=>{
        axios.delete(`http://localhost:5000/deleteEvent/${id}`)
             .then(res=>{
                 if(res.data.deletedCount===1){
                     const restEvent=events.filter(event=>event._id!==id)
                     setEvents(restEvent)
                 }
             })

    }
    
    return (
        <div className='w-5/6 mx-auto'>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    events?.map(event=><Event key={event._id} event={event} deleteEvent={deleteEvent}/>)
                }

            </div>
            
        </div>
    );
};

export default Events;