import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'


const NavBar = () => {
    return (
        <>              
            <div className='flex flex-row justify-between m-5 text-white'>
                <div id="logo" className='flex items-center h-24 max-w-[1240px] m-0 px-4'>   
                    <Link to="/react-johnflix">
                        <img src={Logo} className="logo flex justifie-start" alt="Logo of the Application Johnflix" />
                    </Link>
                </div>
                <nav className='flex flex-row gap-32 hidden md:flex font-mono monospace text-2xl'>
                    <div className='nav-section-1 flex items-center gap-8'>
                        <NavLink to="/react-johnflix"  style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>Home</NavLink>
                        <NavLink to="/movies" style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>Movies</NavLink>
                        <NavLink to="/all-tv-show" style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>TVShow</NavLink>
                    </div>
                    <div className='nav-section-2 flex items-center gap-8'>
                        <NavLink to="/login" style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>Login</NavLink>
                        <NavLink to="/register" style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>Register</NavLink>
                    </div>
                    <div className="searchbar flex items-center">
                        <input className="p-2 bg-gray-100 rounded-lg" name="search" type="search" placeholder="Search..."/>
                    </div>
                </nav>
            </div>
   
        </>
    );
};


export default NavBar