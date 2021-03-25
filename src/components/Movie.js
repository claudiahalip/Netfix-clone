import React from 'react';
import defaultImage from '../images/netflix-img.jpg';

export default function Movie({backdrop_path, original_title, overview, poster_path, release_date}) {
    return (
        <div className="card">
         <img src={backdrop_path} alt=""/>
         <h1 >Movie Test</h1>  
         <h1>{original_title}</h1>          
        </div>
    )
}
