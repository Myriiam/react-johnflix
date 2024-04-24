import React, { useState, useEffect } from "react";
import MovieContext from "./MovieContext";


const MovieContextProvider = ({children}) => {
    const [recordsMovie, setRecordsMovie] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWI1MzljYTEwYjdiMTNkMzU2OTFhZjU3NzFkYTMwMSIsInN1YiI6IjY2MjIyNTlhZTRjOWViMDE3Y2Y2ZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.naI9GfTAH4y2lK9dCs4ez5CXzAmnwPj6Z8brWfFQ5pI'
        }
    }

    useEffect(() => {
        const getMovies = async () => {
            const URL_MOVIES = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
            const response = await fetch(URL_MOVIES, options);
            const data = await response.json();
            return setRecordsMovie(data.results);
        }

        getMovies();

    }, []);

    return (
        <>
            <MovieContext.Provider value={{recordsMovie, setRecordsMovie}}>
                {children}
            </MovieContext.Provider>
        </>
     );
    
}


export default MovieContextProvider