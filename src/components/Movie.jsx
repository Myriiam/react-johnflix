import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'


const Movie = () => {
    const params = useParams();
    //console.log(params.id);
    const [detailsMovie, setDetailsMovie] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWI1MzljYTEwYjdiMTNkMzU2OTFhZjU3NzFkYTMwMSIsInN1YiI6IjY2MjIyNTlhZTRjOWViMDE3Y2Y2ZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.naI9GfTAH4y2lK9dCs4ez5CXzAmnwPj6Z8brWfFQ5pI'
        }
    }; 

    useEffect(() => {
       
        const getDetailsMovie = async () => {
            const URL_MOVIES = `https://api.themoviedb.org/3/movie/${params.id}`;
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
            //console.log(data);
            return setDetailsMovie(data);
        } 

        const getSimilarMovies = async () => {
            const URL_MOVIES = `https://api.themoviedb.org/3/movie/${params.id}/similar`;
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
            console.log(data.results);
            return setSimilarMovies(data.results);
        } 

        getDetailsMovie();
        getSimilarMovies();

    }, [params.id]);
    
    return (
        <>  
            <div>
                <div className='details-movie'>
                    <div key={detailsMovie.id} className='flex h-screen'>
                        <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat bg-black bg-opacity-50"
                        style={{  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${detailsMovie.backdrop_path})` }}
                        >   
                            <NavBar />
                            <div className='w-6/12 text-left m-10 px-8 py-10 bg-gradient-to-r from-black via-transparent to-transparent'>
                                <h1 className='text-white my-5 font-bold text-6xl'>{detailsMovie.title}</h1>
                                <p className='text-white flex flex-row'>{detailsMovie.overview}</p>
                                <div className="buttons flex gap-6 my-8 font-bold">
                                    <button className="border border-transparent bg-white text-black py-3 px-6 rounded-lg">Play</button>
                                    <button className="border border-transparent bg-gray-400 text-white px-5 py-3 rounded-lg">+ My List</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='similar-movies flex flex-row flex-wrap gap-3 my-10'>
                    <h1 className="text-white text-2xl ml-10 font-semibold">You May Also Like</h1>
                    <div className="flex">
                        {similarMovies.map((similarMovie, index) => (
                            <Link to={`/movies/movie/${similarMovie.id}`} key={similarMovie.id+index} className='hover:scale-95'>
                                <img src={`https://image.tmdb.org/t/p/w500/${similarMovie.poster_path}`} className="poster-movie" alt="Poster of the movie" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Movie
