import React from 'react';
import axios from 'axios';

const serverURL = "http://localhost:8888"

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            rec1_id: "", 
            rec2_id: "",
            rec3_id: ""
        }
    }
    
    componentDidMount() {
        //first, retrieve category object from database
        // axios.get(`${serverURL}/categories/`).then((response) => {
        //     console.log(response)
        //     // then, for each category get the item_ids and ratings of rec1, rec2, and rec3 
        //     // and items by the item_id and display them under each category!


        //     // this.setState({item: response.data.data});
        //     // let reviews = []
        //     // let sumRating = 0.0
        //     // let numRatings = 0.0

        //     // //for each review in item.reviews, retrieve review object from database and append to this.state.reviews for display
        //     // response.data.data.reviews.forEach(review_id => {
        //     //     axios.get(`${serverURL}/review/${review_id}`).then((r) => {
        //     //         let review = r.data.data
        //     //         reviews.push(review)
        //     //         sumRating += review.review_rating
        //     //         numRatings = numRatings + 1 
        //     //         this.setState({ reviews: reviews, avgReview: (sumRating / numRatings) })
        //     //     });
        //     // });
        // });
    }

    render() {
        return(
            <nav className="left-layout">
                <h1 className="title">Mini-Amazon</h1>
                <p>
                    Welcome to our website!
                </p>
                <div>
                    <a href="/shop">
                        <button className="btn btn-secondary">Shop Now!</button><br/>
                    </a>
                </div>
                <div className="left-layout" id="recommended-items">
                    <p>
                        Your Recommended Items
                    </p>

                </div>
            </nav>
        )
    }
}