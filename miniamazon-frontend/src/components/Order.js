import React from 'react';
import axios from 'axios';

const serverURL = "http://localhost:8888"

export default class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.order
        };
    }

    componentDidMount() {
        console.log(this.state.order)
    }

    render() {
        return(
            <div>
                <h2>
                    <a href={"/order-history/" + this.state.order._id}>
                        <div> Order Number: {this.state.order._id} </div>
                    </a>
                    Shipping Address: {this.state.order.order_address} <br/>
                    Payment Method: {this.state.order.order_payment} <br/>
                    Total Price: ${this.state.order.order_price} <br/>
                    Status: {this.state.order.order_status} <br/>
                    Order Date: {this.state.order.order_date} <br/>
                </h2><br/>
            </div> 
        )
    }
}