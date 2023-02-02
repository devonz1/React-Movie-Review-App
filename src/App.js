import React from 'react';
import '../src/App.css';
import Movie from './movielist';
import Review from './reviewcomp';
 


export default class App extends React.Component {
  render() {


    return(
    <div className="background_container">


      <div>
        <Movie />
         
        <div className='review_list'>

        </div>
      </div>

    </div>

    )

    }
  }



  


 
