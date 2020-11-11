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
            reviews: []
        }
    }

    componentDidMount() {
        //first, retrieve item object from database
        axios.get(`${serverURL}/item/${this.state.id}`).then((response) => {
            this.setState({item: response.data.data});
            let reviews = []

            //for each review in item.reviews, retrieve review object from database and append to this.state.reviews for display
            response.data.data.reviews.forEach(review_id => {
                axios.get(`${serverURL}/review/${review_id}`).then((r) => {
                    let review = r.data.data
                    reviews.push(review)
                    this.setState({ reviews: reviews })
                });
            })
        });


        // axios.get(`${serverURL}/cart/${userId}`).then((response1) => {
        //     axios.get(`${serverURL}/items`).then((response2) => {
        //         let items = response1.data.data.items
        //         let products = []
        //         items.forEach(i => {
        //             response2.data.data.forEach(product => {
        //                 if (i === product._id) {
        //                     products.push(product)
        //                 }
        //             })
        //         })
        //         this.setState({ products: products })
        //     });
        // });
    }

    render() {
        return (
            <div>
                <nav className="left-layout">
                    <h1 className="title">{this.state.item.item_name}: ${this.state.item.item_price}</h1>
                    <h4 className="title">{this.state.item.item_description}</h4>
                    <h6 className="title">Item #{this.state.item._id}</h6>
                    <p>
                        Pictures to be added soon! And other fun things!
                    </p>
                    <ReviewModal product ={this.state.item}></ReviewModal><br/><br/>
                    <div>
                        <a href="/shop">
                            <button className="btn btn-secondary">Go Back to Products</button>
                        </a>
                    </div>
                </nav>

                <nav className="left-   ">
                    <h1>Reviews</h1>
                    <h5>Average Rating:</h5>
                    <Rating name="read-only" value={4} readOnly />
                    <h5>Here are the reviews for this product.</h5>
                    { this.state.reviews.map(review => <Review key={review._id} review={review}></Review>)}<br/>

                </nav>

            </div>
        ); 
    }
}
export default Items;