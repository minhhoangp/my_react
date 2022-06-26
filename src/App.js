import React, { useState, useEffect } from 'react';

// frontend 
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=1db74541';

const App = () => {
    // get movie name and return a list of data from OMDBAPI
    // parse the return list with `movies` useState variable
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // 
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='app'>
            {/* website title */}
            <h1>MovieWorld</h1>

            {/* search bar */}
            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon} alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {/* check if there r any results, reponse accordingly */}
            {movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;