import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
 
    return (
        <div>   
            <Link to="/react-johnflix">
                <img src={Logo} className="logo" alt="Logo of the Application Johnflix" />
            </Link>
        </div>
    );
};

export default Header