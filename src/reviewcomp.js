import React from 'react';
import '../src/App.css';


export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           reviewValue: " " ,
          reviewLine: [{reviewId:" " , text: " ",}],
        };
    }


    render() {
        let reviews = [];
        if(this.state.reviews){
            for(let review of this.state.reviews){
                reviews.push(<Review {...review} />);
            }
        }


        


        return (
            <div className='card w-60'>
           <div className='card-header bg-dark text-white'>
                    Add Review</div>

                <div className='card-body text-black fw-light '>
                     <body> </body>
                </div>

                 
            </div>
        )

        ///the state object is where you store property values that belong to the
        ///component. like color , content or any other values that should be rendered.
        /// we call this.state plus the property name to have it rendered and we do
        //it inside the render method. we always have to use the setState method whenever we want to 
        //change a object it lets the component know that its been updated so that it can call
        // the render method.



    }


}

