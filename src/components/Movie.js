import React from 'react';
import defaultImage from '../images/netflix-img.jpg';
import '../css/Movie.css';


export default function Movie({backdrop_path, original_title, overview, poster_path, release_date}) {
    return (
        
        <div className="card">
            
            <img src = {`http://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={defaultImage}/>
            <h1>{original_title}</h1> 
            <h3>Release date: {release_date}</h3> 
            <p>{overview}</p>
           
        </div>
       
       
    )
}
