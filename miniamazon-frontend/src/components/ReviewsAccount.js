import React from 'react';
import '../App.css';
import axios from 'axios';
import ReviewEdit from './ReviewEdit';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

export default class ReviewsAccount extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        let rev = []
        axios.get(`${serverURL}/reviews`).then((response) => {
            let reviews = response.data.data
            reviews.forEach(review => {
                if (reviews.user_id === userId) {
                    rev.push(review)
                }     
            })
            this.setState({reviews: response.data.data})
        });
    }

    render() {

        return(
            <nav className="left-layout">
                <h1 className="title">Your Reviews</h1>
                <div>
                    {this.state.reviews.map(review => <ReviewEdit key={review._id} review={review}></ReviewEdit>)}
                </div>
                <div>
                    <a href="/shop">
                        <button className="btn btn-secondary">Continue Shopping</button><br/><br/>
                    </a>
                </div> 
            </nav>
        )
    }
}