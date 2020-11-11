import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

export default class ProductHistory extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.product
        }
    }

    componentDidMount() {
        console.log(this.props.product)
    }

    render() {
        return(
            <div style={{marginBottom: 50}}>
                <div>
                    <div style={{display: 'flex', width: 500, justifyContent: 'space-between'}}>
                        <div style={{fontSize: 24}}> {this.state.product.item_name}</div>
                        <div style={{fontSize: 22}}> ${this.state.product.item_price} </div>
                    </div>
                    <div style={{fontSize: 18}}> {this.state.product.item_description}</div>
                    <div style={{fontSize: 18}}> Date ordered: {this.state.product.item_description}</div>
                    {this.state.product.item_image} <br/>
                    <div style={{fontSize: 18}}> Count: {this.state.product.count}</div>
                    <a href={"/items/" + this.state.product._id}>
                        <button className="btn btn-secondary">View Full Details</button>
                    </a>
                </div> 
            </div>
        )      
    }
}