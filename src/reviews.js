import React from 'react';
import '../src/App.css';

export default class Review extends React.Component {
    render() {
        return (
            <div className="review">
                <p className="review-header">{this.props.author}</p> 
                <p className="review-body">- {this.props.body}</p>
                <div className="review-footer">
                </div>
            </div>
        );

        }
}