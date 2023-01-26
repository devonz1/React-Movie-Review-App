import React, { useEffect , useState} from 'react';
import axios from 'axios';
import './App.css';
import './App.js';


function Movie(){

    const [movieData, setMovieData] = useState([]);

    useEffect(() =>{
        getTrendingMovieData("movie");
    }, []);
    
    async function getTrendingMovieData(type){
        try{
            const apiKey = '8f6d7949d5d4a3d8de3cd275515511df';
            let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&media_type=movie`);
            console.log (20, resp.data.results);
            setMovieData(resp.data.results);
        } catch (e){

        
        }finally{

        } 
    }

   return (
      <>
     <div className='background_container'>
        <div className='button_container'> 
  <button onClick={() => {
    getTrendingMovieData("movie");
  }  
}>
    Trending Movies
   </button>
   </div>
   <div className='flex-container'>
    {movieData.map((item)=>
    <div className='movie_item'>
    <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}/>
    <div className="movie_name">
        {item.original_title ? item.original_title: item.original_name}
        </div>
        </div>
        )}
   </div>
      </div>
  
      
      </>
   );
    
     
}


export default Movie;