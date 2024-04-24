import React from 'react'
import { useForm } from "react-hook-form"
import { Link }  from 'react-router-dom'
import Netflif from '../assets/netflix-bg.jpg'
import NavBar from './NavBar';



const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
   // console.log(errors);
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
                        <h2 className="text-3xl font-semibold text-white mb-6">Sign Up</h2>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstname", { required: "Firstname is a required field", minLength: {value: 3, message:"At least 3 characters are required"} })} className='firstname w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400' type='text' placeholder='Firstname'/>
                            <p className='text-red-500 font-semibold'>{errors.firstname && errors.firstname.message}</p>
                            <input {...register("lastname", { required: "Lastname is a required field" })} className='lastname w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400' type='text' placeholder='Lastname'/>
                            <p className='text-red-500 font-semibold'>{errors.lastname && errors.lastname.message}</p>
                            <input {...register("email", { required: "A unique email is required" })} className='email w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400' type='email' placeholder='Email'/>
                            <p className='text-red-500 font-semibold'>{errors.email && errors.email.message}</p>
                            <input {...register("password", { required: "A password is required", minLength: {value: 6, message:"At least 6 characters are required"} })} className='pwd w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400' type='password' placeholder='Password'/>
                            <p className='text-red-500 font-semibold'>{errors.password && errors.password.message}</p>
                            <input {...register("conditions", { required: "You need to accept all conditions before submitting the form" })} id="check-conditions" className='conditions' type='checkbox'/>
                            <label htmlFor="check-conditions" className="check-label text-white ml-3">I Accept General Tearms And Conditions Of Use</label>
                            <p className='text-red-500 font-semibold'>{errors.conditions && errors.conditions.message}</p>
                            <button className='submit-btn w-full bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-500 transition duration-200' disabled={isSubmitting} type='submit'>
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className="text-white mt-4 flex gap-3 justify-center mt-6">
                            <p>Already Have An Account ?</p>
                            <Link to="/login" className="text-blue-500">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm