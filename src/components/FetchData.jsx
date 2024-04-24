import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../context/MovieContext';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';



const FetchData = () => {
   // const [recordsMovie, setRecordsMovie] = useState([]);
    const [recordsTopMovie, setRecordsTopMovie] = useState([]);
    const [recordsTVShow, setRecordsTVShow] = useState([]);
    const [recordsTopTVShow, setRecordsTopTVShow] = useState([]);
   // const [recordsMovieGenre, setRecordsMovieGenre] = useState([]);

    const {recordsMovie} = useContext(MovieContext);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWI1MzljYTEwYjdiMTNkMzU2OTFhZjU3NzFkYTMwMSIsInN1YiI6IjY2MjIyNTlhZTRjOWViMDE3Y2Y2ZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.naI9GfTAH4y2lK9dCs4ez5CXzAmnwPj6Z8brWfFQ5pI'
        }
    };

    useEffect(() => {

         const getTopMovies = async () => {
            const URL_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US";
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
            return setRecordsTopMovie(data.results);
        } 
    
        const getTVShow = async () => {
           // const URL_MOVIES = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&watch_region=Belgium&with_genres=10768";
            const URL_MOVIES = "https://api.themoviedb.org/3/trending/tv/week?language=en-US";
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
            return setRecordsTVShow(data.results);
        }

        const getTopTVShow = async () => {
            const URL_MOVIES = "https://api.themoviedb.org/3/tv/top_rated?language=en-US";
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
           // console.log(data);
            return setRecordsTopTVShow(data.results);
        }

       /*  const getMovieGenre = async () => {
            const URL_MOVIES = "https://api.themoviedb.org/3/genre/movie/list";
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
            console.log(data);
            return setRecordsMovieGenre(data.genres);
        } */

    //  getMovies();
       getTopMovies();
       getTVShow();
       getTopTVShow();
    // getMovieGenre();

    }, [])

   
   /*  const getMoviesByGenre = (genreId) => {
        return recordsMovie.filter(movie => movie.genre_ids.includes(genreId));
    }; */

    return (
        <>  
            <div>
                <div className='trending-movies flex flex-row flex-wrap gap-5 my-10'>
                    <h1 className="text-white text-2xl font-semibold ml-10">Trending Movies</h1>
                    <div className="flex">
                        {recordsMovie.map((movie, index) => (
                                <Link to={`/movies/movie/${movie.id}`} key={index} className='hover:scale-95 rounded-2xl gap-5'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="poster-movie" alt="Poster of the movie" />
                                </Link>
                        ))}
                    </div>
                </div>
                <div className='top-movies flex flex-row flex-wrap gap-5 my-10'>
                    <h1 className="text-white text-2xl font-semibold ml-10">Top Rated Movies</h1>
                    <div className="flex">
                        {recordsTopMovie.map((topMovie, index) => (
                            <Link to={`/movies/movie/${topMovie.id}`} key={index} className='hover:scale-95'>
                               <img src={`https://image.tmdb.org/t/p/w500/${topMovie.poster_path}`} className="poster-movie" alt="Poster of the movie" />
                           </Link>
                        ))}
                    </div>
                </div>
                <div className='trending-tv flex flex-row flex-wrap gap-5 my-10'>
                    <h1 className="text-white text-2xl font-semibold ml-10">Trending TV Shows</h1>
                    <div className="flex">
                        {recordsTVShow.map((showList, index) => (
                            <Link to={`/all-tv-show/tv-show/${showList.id}`} key={index} className='hover:scale-95'>
                                <img src={`https://image.tmdb.org/t/p/w500/${showList.poster_path}`} className="poster-movie" alt="Poster of the movie" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='top-tv flex flex-row flex-wrap gap-5 my-10'>
                    <h1 className="text-white text-2xl font-semibold ml-10">Top Rated TV Shows</h1>
                    <div className="flex">
                        {recordsTopTVShow.map((topShow, index) => (
                            <Link to={`/all-tv-show/tv-show/${topShow.id}`} key={index} className='hover:scale-95'>
                                <img src={`https://image.tmdb.org/t/p/w500/${topShow.poster_path}`} className="poster-movie" alt="Poster of the movie" />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* <div className='genre-movie'>
                <h1>Movie Genres</h1>
                    {recordsMovieGenre.map((genre, index) => (
                        <div key={index}>
                            <h2>{genre.name}</h2>
                            <div className="movies-by-genre">
                                {getMoviesByGenre(genre.id).map((movie, movieIndex) => (
                                    <div key={movieIndex}>
                                        {movie.id}: {movie.title}
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="poster-movie" alt="Poster of the movie" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </>
    );
};

export default FetchData
