import axios from 'axios';
import { useEffect, useState } from 'react';

const useVolunterServices = () => {
    const [volunteerServices,setVolunteerServices]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/volunteerServices')
           .then(data=>{
            setVolunteerServices(data.data)
           })

    },[])
    return [volunteerServices]
};

export default useVolunterServices;