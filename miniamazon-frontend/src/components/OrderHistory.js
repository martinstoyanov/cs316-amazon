import React from 'react';
import Order from './Order';
import ProductHistory from './ProductHistory';
import axios from 'axios';

const serverURL = "https://miniamazon-sp9m9.ondigitalocean.app"

export default class OrderHistory extends React.Component{
    constructor(props) {
        super(props)
        var url = window.location.href;
        var parts = url.split("/");
        var id = parts[parts.length - 1];
        this.state = {
            products: [],
            id: id,
            order: {},
            cart: {},
        }
    }

    componentDidMount() {
        axios.get(`${serverURL}/order/${this.state.id}`).then((response) => {
            this.setState({cart: response.data.data})
            let p = []

            this.state.cart.items.forEach(item => {
                axios.get(`${serverURL}/item/${item[0]}`).then((i) => {
                    let product_history = i.data.data
                    product_history.count = item[1]
                    product_history.order_date = this.state.cart.order_date
                    p.push(product_history)
                    this.setState({products: p})
                })
            })
        });
    }

    render() {
        return(
            <nav className="left-layout">
                <h1 className="title">Items</h1>
                <div>
                    <a href="/shop">
                        <button className="button button1">Continue Shopping</button><br/><br/>
                    </a>
                </div>
                <div>
                    {this.state.products.map(product => <ProductHistory key={product._id} product ={product}></ProductHistory>)}
                </div>

            </nav>
        )   
    }
}