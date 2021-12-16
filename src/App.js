import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';


function App() {
 const[movies, setMovies] = useState([]);
 

  useEffect(()=>{
    const fetchMovie = async () => 
      await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=3924c61463cb07d286ca7c674effbaf6&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
       setMovies(data.results);
        
      });

    fetchMovie();

  }, [])


  




  return (
    <>
     <Header/>
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie)=>
      <Movie key={movie.id} {...movie}/>)}
        </div>
        </>
      
  );
}

export default App;
