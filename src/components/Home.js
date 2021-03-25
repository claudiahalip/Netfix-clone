import React, {useState, useEffect} from 'react';
import img1 from '../images/netflix-img.jpg';
import Movie from '../components/Movie';
import '../css/Home.css';
import {Route, Switch} from 'react-router-dom';

export default function Home() {

    const API_URL=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY }&sort_by=revenue.desc`

    const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
   
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then( (data) =>  {
           setData([...data.results])
            }
        )
    },[])
    
    //console.log(data[0].title)
    
    console.log(data)
    // // let movies = data.results;
    // //backdrop_path, original_title, overview, poster_path, release_date,
    const moviesList = data.map( ({backdrop_path, original_title, overview, poster_path, release_date,id}) => ( 
       <li key={id}>
           <Movie
           backdrop_path={backdrop_path} 
           original_title={original_title} 
           overview={overview} 
           poster_path={poster_path} 
           release_date={release_date}
           />
       </li>
    ));
    
    return (
        <div>
            <Route exact path='/'>
            <h1>Netflix-clone</h1>
            <img src={img1} alt=""/>
            </Route>
            <Route exact path='/movies'>
            <ul className="allMovies"><h1>Films with the Highest Revenue</h1>{moviesList}</ul>
            </Route>
        </div>
    )
}


