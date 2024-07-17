import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from '../firebaseconfig'
import { useNavigate } from 'react-router-dom'
// google icon
import { IoLogoGoogleplus } from "react-icons/io";

const Login = () => {
    const naviget = useNavigate()

    const hendelLogin = async () => {
        try {
            let login = await signInWithPopup(auth, googleAuthProvider);
            naviget('/Add');
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    return (
        <div className='bg-secondary rounded w-50 mx-auto p-5 my-5 text-center text-white'>
            <h1>Google Login</h1>
            <button  onClick={() => hendelLogin()} className='btn bg-danger text-white mt-3 pb-3' ><span className='text-white fs-4 me-2 '><IoLogoGoogleplus /></span>  Login With Google</button>
        </div>
    )
}

export default Login
