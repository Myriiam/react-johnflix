import React, {useContext, useState, useEffect} from 'react'
import MovieContext from '../context/MovieContext';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NavBar from './NavBar.jsx'


const Hero = () => {
    const {recordsMovie} = useContext(MovieContext);
    //console.log(recordsMovie.length);
    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSlide === recordsMovie.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [currentSlide, recordsMovie.length]);


    return (
        <>                      
            <div className='overflow-hidden relative w-full h-screen object-contain'>
                {recordsMovie.map((movie, index) => (
                    <div 
                    key={index} 
                    className={`w-full h-full bg-cover bg-no-repeat absolute top-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`, }}
                    >
                        <NavBar />
                        <div className='w-6/12 text-left ml-16 mt-32 px-8 py-10 bg-gradient-to-r from-black via-transparent to-transparent'>
                            <h1 className='text-white my-5 font-bold text-6xl'>{movie.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default Hero