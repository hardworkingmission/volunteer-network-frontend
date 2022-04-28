import React, { useState } from 'react';
import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from '../../../firebase.init'
import useAuthState from '../../../hooks/useAuthState/useAuthState';
import { Navigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {

    const [error,setError]=useState('')
    const signInWithGoogle=()=>{
        const provider= new GoogleAuthProvider()
        provider.addScope('email')
        signInWithPopup(auth,provider)
           .then((res)=>{
               console.log(res.user.getProviderData())
               console.log(auth)
               setError('')
           }).catch((err)=>{
               setError(err.message)
           })

    }
    const signInWithGithub=()=>{
        const provider= new GithubAuthProvider()
        provider.addScope('email')
        signInWithPopup(auth,provider)
           .then((res)=>{
               console.log(res.user)
               console.log(auth)
               setError('')
           }).catch((err)=>{
               setError(err.message)
           })
    }
    //redirect
    const [currentUser,setCurrentUser] =useAuthState()
    let location=useLocation()
    let from = location.state?.from?.pathname || "/";
    if(currentUser.uid){
        Navigate(from,{replace:true})
    }
    return (
        <div>
            <p className='text-red-600'>{error&&error}</p>
            <button className='w-full py-1 text-white font-bold bg-blue-600 rounded my-2' onClick={signInWithGoogle}>Google Sign In</button><br />
            <button className='w-full py-1 text-white font-bold bg-blue-600 rounded' onClick={signInWithGithub}>Github Sign In</button>
        </div>
    );
};

export default SocialLogin;