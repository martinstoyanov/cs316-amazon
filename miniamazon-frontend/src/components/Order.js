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
                <h3 >
                    Order Number: 
                    <a className="blue-font" href={"/order-history/" + this.state.order._id}>
                        <b>{this.state.order._id} </b>
                    </a><br/>
                    Shipping Address: <b>{this.state.order.order_address}</b> <br/>
                    Payment Method: <b>{this.state.order.order_payment} </b><br/>
                    Total Price: <b>${this.state.order.order_price}</b> <br/>
                    Status: <b>{this.state.order.order_status}</b> <br/>
                    Order Date: <b>{this.state.order.order_date}</b> <br/>
                </h3><br/>
            </div> 
        )
    }
}