import React from 'react';
import '../App.css';
import axios from 'axios';
import ReviewEdit from './ReviewEdit';

const serverURL = "https://miniamazon-sp9m9.ondigitalocean.app"
const userId = localStorage.getItem('token')

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
                <h1 className="yellow-font"><b>Your Reviews</b></h1><br/>
                <div>
                    {this.state.reviews.map(review => <ReviewEdit key={review._id} review={review}></ReviewEdit>)}
                </div>
                <div>
                    <a href="/shop">
                        <button className="button button1">Continue Shopping</button><br/><br/>
                    </a>
                </div> 
            </nav>
        )
    }
}
