import axios from 'axios';
import { useEffect, useState } from 'react';

const useVolunteers = () => {
    const [volunteers,setVolunteers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/volunteers')
           .then(data=>{
               setVolunteers(data.data)
           })

    },[])
    return [volunteers]
};

export default useVolunteers;