import React from 'react';
import { useEffect } from 'react';


const API_URL = 'https://www.omdbapi.com?apikey=1db74541';

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
        <h1>App</h1>
    );
}

export default App;