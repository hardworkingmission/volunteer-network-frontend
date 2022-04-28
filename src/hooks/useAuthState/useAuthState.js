import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../../firebase.init';

const useAuthState = () => {
    const [currentUser,setCurrentUser]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setLoading(false)
                setCurrentUser(user)
            }else{
                setLoading(false)
            }
    
        })
    },[])
    return [currentUser,loading,setCurrentUser]
};

export default useAuthState;