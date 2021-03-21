import React, {useState, useEffect} from 'react';
import img1 from '../images/netflix-screenshot.png';


export default function Home() {
   
    const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY }`

    const [data, setData] = useState({});
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
   
    useEffect(() => {
        fetch(API_URL)

        // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        
        .then(res => res.json())
        .then( (data) =>  {
            setData(data)
            }
        )
    }, [])

    return (
        <div>
            <h1>Netflix-clone</h1>
            <img src={img1} alt=""/>
        </div>
    )
}


