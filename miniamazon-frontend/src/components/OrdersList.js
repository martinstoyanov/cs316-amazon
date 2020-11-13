import React from 'react';
import Order from './Order';
import ProductHistory from './ProductHistory';
import axios from 'axios';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

export default class OrdersList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        let o = []
        axios.get(`${serverURL}/orders`).then((response) => {
            let orders = response.data.data
            orders.forEach(order => {
                if (orders.user_id === userId) {
                    o.push(order)
                }     
            })
            this.setState({orders: response.data.data})
        });
    }

    render() {
        return(
            <nav className="left-layout">
                <h1 className="title">Your Orders</h1>
                <div>
                    {this.state.orders.map(order => <Order key={order._id} order ={order}></Order>)}
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