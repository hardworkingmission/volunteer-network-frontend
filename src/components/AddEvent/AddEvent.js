import axios from 'axios';
import React, { useState } from 'react';
import banner from '../../logos/cloud-upload-outline 1.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEvent = () => {
    const [event,setEvent]=useState({name:'',date:'',description:''})
    const [banner,setBanner]=useState({})
    const handleChange=(e)=>{
        setEvent({...event,[e.target.name]:e.target.value})
    }
    const handleFile=(e)=>{
        setBanner(e.target.files[0])

    }
    const createEvent=(e)=>{
        e.preventDefault()
        const newEvent={
            img:banner.name,
            ...event
        }
        axios.post(`http://localhost:5000/event`,newEvent)
            .then(res=>{
                if(res.data.insertedId){
                    toast('Event has created successfully')
                    setEvent({name:'',date:'',description:''})
                    setBanner({})
                }
                //console.log(res.data)
            })
        //console.log(newEvent)
    }
return (
        <div className='p-3 bg-white rounded-lg'>
            <form action="" onSubmit={createEvent}>
                <div className='form-group grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
                    <div className="col">
                        <label htmlFor="name" className='block'>Event Title</label>
                        <input type="text"  className='border w-full outline-none rounded' name='name' onChange={handleChange} value={event.name} required/>
                    </div>
                    <div className="col">
                        <label htmlFor="date" className='block'>Event Date</label>
                        <input type="date"  className='border w-full rounded' name='date' onChange={handleChange} value={event.date} required/>
                    </div>
                </div>
                <div className='form-group my-3 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className="col">
                        <label htmlFor="description" className='block'>Description</label>
                        <textarea type="text"  className='border w-full outline-none rounded' id='description' name='description' onChange={handleChange} value={event.description} required/>
                    </div>
                    <div className="col">
                        <label htmlFor="banner" className='block'>Banner</label>
                        <input type="file" name="banner" id="banner" onChange={handleFile} required/>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <input type="submit" value={'Submit'} className="w-1/2 bg-blue-600 py-2 text-white font-bold text-lg rounded cursor-pointer"/>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddEvent;