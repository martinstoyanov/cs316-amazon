import React from 'react';
import axios from 'axios';
import ReviewModal from './ReviewModal';

const serverURL = "http://localhost:8888"

class Items extends React.Component {

    constructor(props) {
        super(props);
        
        var url = window.location.href;
        var parts = url.split("/");
        var id = parts[parts.length - 1];
        this.state = {
            id: id,
            item: {}
        }
    }

    componentDidMount() {
        axios.get(`${serverURL}/item/${this.state.id}`).then((response) => {
            this.setState({item: response.data.data});
            console.log(response.data.data);
        });
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
                    <ReviewModal></ReviewModal><br/><br/><br/>
                    <div>
                        <a href="/shop">
                            <button className="btn btn-secondary">Go Back to Products</button><br/>
                        </a>
                    </div>
                </nav>
            </div>
        ); 
    }
}
export default Items;