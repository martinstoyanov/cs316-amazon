import React from 'react';
import axios from 'axios';

const serverURL = "http://localhost:8888"

export default class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orderID: "",
            orderAddress: "",
            orderPayment: "",
            orderPrice: "",
            orderStatus: "",
            orderDate: "",
            orderDeliveryDate: ""
        };
    }
    

/*function Order({order}){
    return(
        <div>
            <h2>
                Order Number: {order.orderID} <br/>
                Shipping Address: {order.orderAddress} <br/>
                Payment Method: {order.orderPayment} <br/>
                Total Price: ${order.orderPrice} <br/>
                Status: {order.orderStatus} <br/>
                Order Date: {order.orderDate} <br/>
                Explected/Actual Delivery Date: {order.orderDeliveryDate} <br/>
            </h2><br/>
        </div> 
    )
}

export default Order;*/
componentDidMount() {
    axios.get(`${serverURL}/items`).then((response) => {
        this.setState({orders: response.data.data})
    });
}
render() {
    return(
        <nav className="left-layout">
            <h1 className="title">Orders</h1>
            <p>
                Here are your orders.
            </p>
            <div>
                 {/* {this.state.orders.map(order => <Order key={order._id} order ={order}></Order>)}  */}
            </div>

        </nav>
    )
}
}