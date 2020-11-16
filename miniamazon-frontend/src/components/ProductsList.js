import React from 'react';
import Product from './Product';
import axios from 'axios';

const serverURL = "http://localhost:8888"

export default class ProductsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          products: []
        };
    }

    componentDidMount() {
        axios.get(`${serverURL}/items`).then((response) => {
            this.setState({products: response.data.data.slice(0, 20)})
        });
    }

    
    render() {
        return(
            <nav className="left-layout">
                <h1 className="yellow-font"><b>Shop</b></h1><br/>
                <h5 className="blue-font">
                    Here are the products we have.
                </h5><br/>
                <div>
                    {this.state.products.map(product => <Product key={product._id} product ={product}></Product>)}
                </div>
                
            </nav>
        )
    }
}