import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';


function App() {
 const[movies, setMovies] = useState([]);

 const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=3924c61463cb07d286ca7c674effbaf6&language=en-US&page=1&include_adult=false`

 

  

  const fetchMovie = async (value) => 
   await fetch (SEARCH_API + `&query=${value}`)
   .then(res => res.json())
   .then(data => {
     console.log(data)
    setMovies(data.results);
     
   });


  




  return (
    <>
     <Header handleSearch={fetchMovie}/>
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie)=>
      <Movie key={movie.id} {...movie}/>)}
        </div>
        </>
      
  );
}

export default App;
