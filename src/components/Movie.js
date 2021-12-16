import React from 'react'

const Img_Api="https://image.tmdb.org/t/p/w1280";

const Movie =({title,poster_path,overview,vote_average}) => 
<div className= 'movie'>
<img src={Img_Api + poster_path} alt={title}/>
<div className='movie-info'>
    <h3>{title}</h3>
    <span>{vote_average}</span>
</div>
<div className='movie-overview'>
    <h2>overview</h2>
    <p>{overview}</p>
</div>
</div>

export default Movie;
