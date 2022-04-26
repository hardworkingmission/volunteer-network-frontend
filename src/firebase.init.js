// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId 
};
// const firebaseConfig = {
//     apiKey: "AIzaSyAxxEKz9o3eS94C2O7OEdScSHI_7rqWTVE",
//     authDomain: "volunteer-network-d8743.firebaseapp.com",
//     projectId: "volunteer-network-d8743",
//     storageBucket: "volunteer-network-d8743.appspot.com",
//     messagingSenderId: "903519053676",
//     appId: "1:903519053676:web:4033dcef81bdf3de567549"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;