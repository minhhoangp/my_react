import React from 'react';
import { useEffect } from 'react';

// frontend 
import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'https://www.omdbapi.com?apikey=1db74541';

const movie1 = {
    'Poster': "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    'Title': "Italian Spiderman",
    'Type': "movie",
    'Year': "2007",
    'imdbID': "tt2705436"
}

const App = () => {
    // get movie name and return a list of data from OMDBAPI
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data);
    }

    // 
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieWorld</h1>

            <div className='search'>
                <input placeholder='Search for movies' value='Superman' onchange={() => {}}/>
                <image src = {SearchIcon} alt="search" onClick={() => {}}/>
            </div>


            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src = {movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default App;