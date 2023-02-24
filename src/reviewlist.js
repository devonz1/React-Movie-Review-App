import React from 'react';
import '../src/App.css';
import Reviewform from './reviewform';
import Review from './reviews';

export default class ReviewList extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showReviews: false,
        reviews: []
      };
    }
    
    render () {
      const reviews = this._getReviews();
      let reviewNodes;
      let buttonText = 'Show Reviews';
      
      if (this.state.showReviews) {
        buttonText = 'Hide Reviews';
        reviewNodes = <div className="review-list">{reviews}</div>;
      }
      
      return(
        <div className="review-box">
          <h2 className='com'>Add Review here</h2>
          <Reviewform addReview={this._addReview.bind(this)}/>
          <button id="review-reveal" onClick={this._handleClick.bind(this)}>  
            {buttonText}
          </button>
          <h3 className='review'>Reviews</h3>
          <h4 className="review-count">
            {this._getReviewsTitle(reviews.length)}
          </h4>
          {reviewNodes}
        </div>  
      );
    } 
    _addReview(author, body) {
      const review = {
        id: this.state.reviews.length + 1,
        author,
        body
      };  /// this function will allow for each review to be added to 
      //the reviews array and it will access the reviews property in the state 
      //and allow for a review to be added to the array .
      this.setState({ reviews: this.state.reviews.concat([review]) });  
    }
    _handleClick() {
      this.setState({
        showReviews: !this.state.showReviews
      });
    }
    
    _getReviews() {    
      return this.state.reviews.map((review) => { 
        return (
          <Review
            author={review.author} 
            body={review.body} 
            key={review.id} />
        ); 
      });
    } ///this function will allow us to display all the reviews by the name and
     /// whatever is added into the body with the author and body properties 
     /// and each review will have its own specific key.
    
    _getReviewsTitle(reviewCount) {
      if (reviewCount === 0) {
        return 'No reviews yet';
      } else if (reviewCount === 1) {
        return "1 review";
      } else {
        return `${reviewCount} reviews`;
      }
    }
  }
    

 
        


       

        ///the state object is where you store property values that belong to the
        ///component. like color , content or any other values that should be rendered.
        /// we call this.state plus the property name to have it rendered and we do
        //it inside the render method. we always have to use the setState method whenever we want to 
        //change a object it lets the component know that its been updated so that it can call
        // the render method.



    

    



