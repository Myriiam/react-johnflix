import React from 'react'
import { useForm } from "react-hook-form"
import { Link }  from 'react-router-dom'
import Netflif from '../assets/netflix-bg.jpg'
import NavBar from './NavBar';


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    console.log(errors);
    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
    }

    return (
        <>  
            <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-black bg-opacity-50 overflow-y-auto"
            style={{  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Netflif})` }}
            >   
                <NavBar />
                <div className="flex flex-col items-center justify-center">
                    <div className="w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold text-white mb-6">Log In</h2>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email", { required: "The email is required" })} className='email w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400' type='email' placeholder='Email'/>
                            <p className='text-red-500 font-semibold'>{errors.email && errors.email.message}</p>
                            <input {...register("password", { required: "The password is required" })} className='pwd w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400' type='password' placeholder='Password'/>
                            <p className='text-red-500 font-semibold'>{errors.password && errors.password.message}</p>
                            <button className='submit-btn w-full bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-500 transition duration-200' disabled={isSubmitting} type='submit'>
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className="text-white mt-6 ">
                            <Link to="#" className="text-blue-500">Forgot Your Password ?</Link>
                            <div className="flex gap-3 justify-center mt-3">
                                <p>Don't Have An Account ?</p>
                                <Link to="/register" className="text-blue-500">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* <div className="login-page bg-black min-h-screen flex flex-col items-center justify-center">
            <div className="w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-white mb-6">Sign In</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400" type='email' placeholder='Email' />
                    <input className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400" type='password' placeholder='Password' />
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200" type='submit'>Sign In</button>
                </form>
                <div className="text-white mt-4">
                    <Link to="#" className="text-blue-500">Forgot Your Password?</Link>
                    <p>Don't Have An Account?</p>
                    <Link to="/register" className="text-blue-500">Sign Up</Link>
                </div>
            </div>
        </div> */}
        </>
    );
};

export default LoginForm