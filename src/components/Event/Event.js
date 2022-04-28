import React from 'react';

const Event = ({event,deleteEvent}) => {
    const{_id,img,volunteerService,date}=event
    const handleDelete=(id)=>{
        const confirm=window.confirm('Do you want to cancel the Event ?')
        if(confirm){
            deleteEvent(id)
        }
    }
    return (
        <div className='col flex justify-between p-2 border border-2 rounded'>
            <div className="event flex w-full">
                <div className="eent-img">
                    <img className='h-[150px] w-[150px]' src={process.env.PUBLIC_URL+`/images/${img}`} alt="" />
                </div>
                <div className="event-info ml-3">
                    <h3>{volunteerService}</h3>
                    <p>{date}</p>
                </div>
            </div>
            <div className="event-action flex items-end">
                <button className='bg-gray-200 w-full py-2 px-3 rounded ' onClick={()=>handleDelete(_id)}>cancel</button>
            </div>
        </div>
    );
};

export default Event;