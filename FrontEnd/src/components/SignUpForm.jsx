import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Block from './block';
const SignUpForm = () => {
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");
    const [message2 , setMessage2] = useState("");
    const [message3 , setMessage3] = useState("");
    const [cpass , setCpass] = useState("");
    const checkPass=(e)=>
    {
       setPassword(e.target.value);
       const pr=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
       setMessage((password.match(pr))?"":"Password should contain 7-15 characters with atleast 1 lowercase, 1 uppercase, one numeric digit and one special character.")
    }
    const checkCpass=(e)=>
    {
        setCpass(e.target.value);
        setMessage2(cpass==password?"":"Confirm Password doesn't match with password");
    }
    const checkEmail=(e)=>
{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(e.target.value);
    setMessage3(emailRegex.test(email) ? "" : "Invalid email format");
}
   

    return (
        <>
        <Block></Block>
         <div className='flex justify-center '>
            <div className="bg-transparent backdrop-blur-sm lg:w-96  p-12 sm:w-full m-12 box-content shadow-md rounded-lg">
                <form action="">
                    <h1 className="text-4xl text-center mb-5 font-bold">Sign Up</h1>
                    <div className="inputBox flex relative items-center my-3 h-12 w-full ">
                        <input className="bg-transparent w-full p-5 h-full text-xl  rounded-3xl outline-none border-2 focus:border-red-400" type="text" placeholder="Username" required />
                        <FaUser className="absolute right-5 top-1/2 -translate-y-2/4" />
                    </div>
                    <div className="inputBox flex relative items-center my-3 h-12 w-full ">
                        <input className="bg-transparent w-full p-5 h-full text-xl  rounded-3xl outline-none border-2 focus:border-red-400" type="email" placeholder="Email" required onChange={checkEmail} value={email}/>
                        <MdEmail className="absolute right-5 top-1/2 -translate-y-2/4" />
                    </div>
                    <h5 className='text-red-800 bg-white '>{message3}</h5>  
                    <div className="inputBox flex relative items-center my-3 h-12 w-full">
                        <input className="bg-transparent w-full p-5 h-full text-xl  rounded-3xl outline-none border-2 focus:border-red-400" type="password" placeholder="Password" required onChange={checkPass} value={password} />
                        <RiLockPasswordFill className="absolute right-5 top-1/2 -translate-y-2/4" />
                          
                    </div>
                    <h5 className='text-red-800 bg-white '>{message}</h5>
                    <div className="inputBox flex relative items-center my-3 h-12 w-full">
                        <input className="bg-transparent w-full p-5 h-full text-xl rounded-3xl outline-none border-2 focus:border-red-400" type="password" placeholder="Confirm Password" required onChange={checkCpass} value={cpass}/>
                        <RiLockPasswordFill className="absolute right-5 top-1/2 -translate-y-2/4" />
                    </div>
                    <h5 className='text-red-800 bg-white '>{message2}</h5>
                    <button className="w-full h-auto rounded-3xl font-bold hover:bg-red-600 bg-red-800 text-white p-2 my-3">Register</button>
                    <p className='text-center'>By Clicking Register Button you agree to our Terms and Condition and Privacy Policy.</p>
                </form>
                <p className='mt-10 text-center'>Already have an account? <Link to={"/Login/"} href="#" className="hover:text-red-400 font-bold ">Login</Link> </p>
            </div>
            </div>

        </>
    )
}

export default SignUpForm
