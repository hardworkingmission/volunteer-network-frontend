import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const{volunteerServiceId}=useParams()
    const [volunteerService,setVolunteerService]=useState({})
    const [newVolunteer,setNewVolunteer]=useState({name:'Shakil',email:'sshakil496@gmail.com',data:'12/03/2022',description:''})

    useEffect(()=>{
        axios.get(`http://localhost:5000/volunteerService/${volunteerServiceId}`)
            .then(res=>{
                setVolunteerService(res.data)
            })
    },[volunteerServiceId])
    const handleChange=(e)=>{
        setNewVolunteer({...newVolunteer,[e.target.name]:e.target.value})
    }
    const {name,email,date,description,}=newVolunteer
    const handleRegister=(e)=>{
        e.preventDefault()
        const booking={
            name:name,
            email:email,
            date:date,
            description:description,
            img:volunteerService.img,
            volunteerService:volunteerService.name,
            volunteerServiceId:volunteerServiceId
        }
        axios.post('http://localhost:5000/newVolunteer/',booking)
            .then(res=>{
                if(res){
                    toast('Volunteer has registered Successfully')
                }
            })
        //console.log(booking)
        
    }
    return (
        <div className='lg:w-2/6 md:w-3/6 w-5/6 mx-auto border border-1 rounded p-5'>
            <h3 className='text-center text-2xl font-bold my-3'>Register as a Volunteer</h3>
            <form action="" onSubmit={handleRegister}>
                <input type="text" name='name' className='mb-2 outline-none border-b-2 p-2 w-full' placeholder='Full Name' value={newVolunteer.name} readOnly/> <br />
                <input type="email" name="email" className='mb-2 outline-none border-b-2 p-2 w-full' id=""  placeholder='Email' value={newVolunteer.email} readOnly/><br />
                <input type="date" name="date"  className='mb-2 outline-none border-b-2 p-2 w-full'id="" placeholder='Date' onChange={handleChange} required/> <br />
                <input type="text" name='description' className='mb-2 outline-none border-b-2 p-2 w-full' placeholder='Description' value={newVolunteer.description} onChange={handleChange} required/> <br />
                <input type="text" name='volunteerService' className='mb-2 outline-none border-b-2 p-2 w-full' value={volunteerService.name} readOnly /><br />
                <input type="submit" className='bg-blue-600 w-full p-2 text-white text-xl  rounded my-2 cursor-pointer' value="Register" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;