import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './App.js';
import Review from './reviewlist';
 

function Movie() {


    const [movieData, setMovieData] = useState([]);///the movieData varaiable 
    //will hold all the movie data that wil be dispalyed on the page  and setmovieData 
    ///function data will allow us to set the movies. The setmovieData function will allow
    //us to change the state to display new trending movie data whenever they become available.

    useEffect(() => {
        getTrendingMovieData("movie"); ///the useffecthook run the trendingmoviedata function to render
        //all the trending movies once the component has rendered.
    }, []);

    async function getTrendingMovieData(type) {
        try {
             const apiKey = process.env.REACT_APP_API_KEY
            let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&media_type=movie`);
            console.log(20, resp.data.results); //the console.log will return 20
            //movie arrays and display each movie object on the page. and the resp.data.results 
            //will display the results from the api call that were storing in the resp variable.

            setMovieData(resp.data.results);  ///this function will grab the movie
            //data form api requests and display the results that are returned.
        } catch (e) {


        } finally {

        }
    };

    return (
        <>
            <div className='background_container'>
                <div className='button_container'>
                    <button className="b1" onClick={() => {
                        getTrendingMovieData("movie")
                            ; //whenever we click the trending movies button it will gives
                        //us the 20 movies we pulled from the api call each time within an array of objects.
                    }
                    }>
                        Trending Movies
                    </button>
                </div>
                <div className='flex-container'>
                    {movieData.map((item) => ///this function will display every item or element in this case the movies
                        /// within the moviedata array  store the movies and return each movie within the div below
                        <div id='movie_item' key={item.id} >  
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="poster" />
                            <div id="movie_name" >
                                {item.original_title ? item.original_title : item.original_n}

                                <div className="review-list">
                                    <Review />
                                </div>
                            </div>
                        </div>

                     /// line 56 the key attribute is needed react uses this key to track 
                     /// each item it ouputs into the dom in case any
                     //of the items change which in this case is each movie item
                     // in the array of movie objects from the api. 

                    )}
                </div>
            </div>


        </>
    );


}


export default Movie;