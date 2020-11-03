import React from 'react';
import axios from 'axios';
import Product from './Product';
    
    const serverURL = "http://localhost:8888"
    //const userId = "5f8b8eee77a1ab596021f8c4"

    export default class SellerList extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                sellerID: "",
                orders: [],
                products: []
            };
        }
        componentDidMount() {
            axios.get(`${serverURL}/items`).then((response) => {
                this.setState({products: response.data.data})
            });
        }
    
        
        render() {
            return(
                <nav className="left-layout">
                    <h1 className="title">PRODUCTS</h1>
                    <p>
                        Here are the products you sell.
                    </p>
                    <div>
                        {this.state.products.map(product => <Product key={product._id} product ={product}></Product>)}
                    </div>
                    
                </nav>
            )
        }
    }