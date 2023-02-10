import logo from './logo.svg';
import './App.css';
import ChildA from './component/ChildA';
//import Counter from './component/Counter';

import { useState, useEffect } from 'react';
import MovieCrd from './component/MovieCrd';



const API_URL = "https://omdbapi.com?apikey=2cdc09f2";

const App = () => {

  const [movies, setMovie] = useState('');
  const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async (title) => {

    console.log('movie serach name: ' + title);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovie(data.Search);

    //console.log('length of movies::'+movies.length);
  }

  useEffect(() => {
    searchMovies('Spiderman')

  }, []);


  return (
    <>
      <div className="app">
        MovieLand
      </div>
      <div className="Search">
        <input placeholder='search for movies' value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <img alt="search" src='logo.svg'
          onClick={() => { searchMovies(searchTerm) }} />
      </div>

      {
        //Check if any one of the Movie is present
        movies?.length > 0
          ? (<div className="app">
            <h2>Movies Found!</h2>
            {
              movies.map((movie) => (<MovieCrd movie={movie} />))
            }
          </div>
          )
          : (<div className="empty">
            <h2>No Movies Found!</h2>
          </div>)
      }

    </>
  );
}

export default App;
