const PORT = 8000
const express  = require('express')
const cors= require('cors')
const axios = require ('axios')
require('dotenv').config()

const app = express()
 



app.get('/', (req,res)=>{
    res.json('hi')
})

app.get('/movie', (req,res)=>{
    getTrendingMovieData("movie"); ///the useffecthook run the trendingmoviedata function to render
    //all the trending movies once the component has rendered.
}, []);

async function getTrendingMovieData(type) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY
        let res = await get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&media_type=movie`);
        res.json(response.data); //the console.log will return 20
        //movie arrays and display each movie object on the page. and the resp.data.results 
        //will display the results from the api call that were storing in the resp variable.
 
    } catch (e) {


    } finally {

    }

};


app.listen(8000, ()=> console.log (`Backend is running on port ${PORT}`)) 