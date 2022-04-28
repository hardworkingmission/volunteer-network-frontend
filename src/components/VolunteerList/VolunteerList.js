import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const VolunteerList = () => {
    const [volunteers,setVolunteers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/allVolunteers')
             .then(res=>{
                 setVolunteers(res.data)
             })

    },[])
    const deleteVolunteer=(id)=>{
        axios.delete(`http://localhost:5000/deleteVolunteer/${id}`)
            .then(res=>{
                if(res.data.deletedCount===1){
                    const restVolunteer=volunteers.filter(volunteer=>volunteer._id!==id)
                    setVolunteers(restVolunteer)
                }
            })
    }
    return (
        <div className="w-full">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Name
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Email
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Registering Date
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Volunteer Service
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    volunteers?.map(volunteer=>(
                                    <tr key={volunteer._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-wrap text-sm font-medium text-gray-900">{volunteer?.name}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {volunteer?.email}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {volunteer?.date}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {volunteer.volunteerService}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap text-center">
                                    <button className=' bg-red-600 text-white px-2 py-1 rounded ' onClick={()=>deleteVolunteer(volunteer._id)}><FontAwesomeIcon icon={faTrash}/></button>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;