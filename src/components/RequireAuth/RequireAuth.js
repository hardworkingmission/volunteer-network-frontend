import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import {onAuthStateChanged} from "firebase/auth";
import useAuthState from '../../hooks/useAuthState/useAuthState';

const RequireAuth = ({children}) => {
    let location=useLocation()
    const [currentUser,loading,setCurrentUser]=useAuthState()
    
    if(loading){
        return <p>Loading...</p>
    }
    if(!currentUser.uid){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children

   
};

export default RequireAuth;