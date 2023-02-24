import React from 'react';
import '../src/App.css';



export default class Reviewform extends React.Component {
    render() {
        return (
            <form className="review-form" onSubmit={this._handleSubmit.bind(this)}>
                <div className=" review-form-fields">
                    <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
                    <textarea placeholder="review" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="review-form-actions">
                    <button className="colo" type="submit">Post review</button>
                </div>
            </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();   // prevents page from reloading on submit
        let author = this._author;
        let body = this._body;
        this.props.addReview(author.value, body.value);


    }///this function will add the name of the reviewer and the 
        ///review they leave into the body of text area  once the submit 
        //button is clicked it changes the value of the state .

}


