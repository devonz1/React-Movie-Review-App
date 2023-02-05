import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './App.js';
import Review from './reviewcomp';
import Rating from './rating';



function  Movie() {
     

      const [movieData, setMovieData] = useState([]);///the movieData varaiable 
    //will hold all the movie data that wil be dispalyed on the page

    useEffect(() => {
        getTrendingMovieData("movie");
    }, []);

    async function getTrendingMovieData(type) {
        try {
            const apiKey = '8f6d7949d5d4a3d8de3cd275515511df';
            let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&media_type=movie`);
            console.log(20, resp.data.results); //the console.log will return 20
            //movie arrays and display each movie object on the page. and the resp.data.results 
            //will display the results from the api call that were storing in the resp variable.

            setMovieData(resp.data.results);
        } catch (e) {


        } finally {

        }
    };
     
    return (
        <>
            <div className='background_container'>
                <div className='button_container'>
                    <button onClick={() => {
                        getTrendingMovieData("movie"); //whenever we click the trending movies button it will gives
                        //us the 20 movies we pulled from the api call each time within an array of objects.
                    }
                    }>
                        Trending Movies
                    </button>
                </div>
                <div className='flex-container'>
                    {movieData.map((item) =>
                        <div id='movie_item'>
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}/>  
                            <div id = "movie_name">
                                 {item.original_title ? item.original_title : item.original_n}
                              <div>
                            <div className="review-list">
                               <div>
                        <span><Review /></span>
                              <Rating />
                        </div>
                        </div>
                        </div>
                         </div>
                         </div>
                          
                        
                    )}
                 </div>
            </div>
                                 

        </>
    );


}


export default Movie;