import React from 'react'
import Header from './Header.jsx'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <>
            <Header />
            <div className='text-white mt-10'>
                <h1 className='font-semibold text-3xl'>ERROR 404 - Page Not Found</h1>
                <button className='mt-10 border p-5 rounded-lg hover:scale-95'>
                    <Link to="/react-johnflix">Back to the HomePage</Link>
                </button>
            </div>
        </>
    );
};

export default NotFound