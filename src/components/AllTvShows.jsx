import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'


const AllTvShows = () => {
    return (
        <>  
            <NavBar />
            <div className='text-white mt-10'>
                <h1 className='font-semibold text-3xl'>All TV Shows</h1>
                <button className='mt-10 border p-5 rounded-lg hover:scale-95'>
                    <Link to="/react-johnflix">Back to the HomePage</Link>
                </button>
            </div>
        </>
    );
};

export default AllTvShows 