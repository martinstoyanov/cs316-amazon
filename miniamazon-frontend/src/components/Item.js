import React from 'react';
import axios from 'axios';
import ReviewModal from './ReviewModal';
import Rating from '@material-ui/lab/Rating';
import Review from './Review';

const serverURL = "http://localhost:8888"

class Items extends React.Component {

    constructor(props) {
        super(props);
        
        var url = window.location.href;
        var parts = url.split("/");
        var id = parts[parts.length - 1];
        this.state = {
            id: id,
            item: {},
            reviews: [],
            avgReview: 0.0,
            seller: "",
            image_url: ""
        };

        this.setAvgReview = this.setAvgReview.bind(this);
    }

    componentDidMount() {
        //first, retrieve item object from database
        axios.get(`${serverURL}/item/${this.state.id}`).then((response) => {
            let item = response.data.data

            this.state.seller = item.sold_by;
            this.state.image_url = item.image_url;

            this.setState({item: response.data.data});
            let reviews = []
            let sumRating = 0.0
            let numRatings = 0.0

            //for each review in item.reviews, retrieve review object from database and append to this.state.reviews for display
            response.data.data.reviews.forEach(review_id => {
                axios.get(`${serverURL}/review/${review_id}`).then((r) => {
                    let review = r.data.data
                    reviews.push(review)
                    sumRating += review.review_rating
                    numRatings = numRatings + 1 
                    this.setState({ reviews: reviews, avgReview: (sumRating / numRatings) })       
                    item.avg_rating = this.state.avgReview

                    //Sends the average rating to the item
                    axios.put(`${serverURL}/item/${this.state.id}`, item).then(response => {
                    })
                });
            })

            //Check if avg rating is greater than any of the 3 recommended, if so, replace the lowest one
            axios.get(`${serverURL}/category/${item.category_name}`).then((response) => {
                let category = response.data.data

                if (item.avg_rating > category.item1_avg_rating) {
                    category.item1_id = item._id
                    category.item1_avg_rating = item.avg_rating
                    console.log(category)
                    //Sends the updated recommended id and rating to category
                    axios.put(`${serverURL}/category/${category._id}`, category).then(response => {
                        console.log(response)
                    })
                }
                
                else if (item.avg_rating > category.item2_avg_rating) {
                    category.item2_id = item._id
                    category.item2_avg_rating = item.avg_rating
                    //Sends the updated recommended id and rating to category
                    axios.put(`${serverURL}/category/${item.category_name}`, category).then(response => {
                        console.log(response)
                    })  
                }

                else if (item.avg_rating > category.item3_avg_rating) {
                    category.item3_id = item._id
                    category.item3_avg_rating = item.avg_rating

                    //Sends the updated recommended id and rating to category
                    axios.put(`${serverURL}/category/${category._id}`, category).then(response => {
                        console.log(response)
                    })
                }
            });
        });
    }

    setAvgReview(event) {
        this.setState({avgReview: event.target.value})
    }

    render() {
        // console.log(this.state.image_url);
        return (
            <div>
                <nav className="left-layout">
                    <h1 className="title">{this.state.item.item_name}: ${this.state.item.item_price}</h1>
                    <h4 className="title">{this.state.item.item_description}</h4>
                    <h6 className="title">Item #{this.state.item._id}</h6>
                    <h6 className="title">Seller: {this.state.seller}</h6>
                    {/* <p>
                        Pictures to be added soon! And other fun things!
                    </p> */}
                    <div style={{marginTop: 20}}>
                        <img src={this.state.image_url}/> <br/>
                    </div>
                    <h6 className="title"></h6>
                    <ReviewModal product ={this.state.item}></ReviewModal><br/><br/>
                    <div>
                        <a href="/shop">
                            <button className="button button2">Go Back to Products</button>
                        </a>
                    </div>
                </nav>

                <nav className="left-layout">
                    <h1>Reviews</h1>
                    <h5>Average Rating:</h5>
                    <Rating name="half-rating-read" value={this.state.avgReview} readOnly />
                    <h5>Here are the reviews for this product.</h5>
                    { this.state.reviews.map(review => <Review key={review._id} review={review}></Review>)}<br/>

                </nav>

            </div>
        ); 
    }
}
export default Items;