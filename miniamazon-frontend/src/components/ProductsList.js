import React from 'react';
import Product from './Product';
import axios from 'axios';

const serverURL = "http://localhost:3000"

export default class ProductsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
                    Here are the products we have.
                </p>
                <div>
                    {this.state.products.map(product => <Product key={product._id} product ={product}></Product>)}
                </div>
                
            </nav>
        )
    }
}