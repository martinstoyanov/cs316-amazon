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
        let product = this.state.product
        if (product.item_description.length > 250) {
            let description_short = product.item_description.slice(0, 250) + "..."
            product.item_description = description_short
            this.setState({product: product})
        }
        
    }

    render() {
        return(
            <div style={{marginBottom: 50}}>
                <div>
                    <div style={{display: 'flex', width: 700, justifyContent: 'space-between'}}>
                        <a href={"/items/" + this.state.product._id}>
                            <div style={{fontSize: 24}}> {this.state.product.item_name}</div>
                        </a>
                        <div style={{fontSize: 22}}> ${this.state.product.item_price} </div>
                    </div>
                    <div style={{fontSize: 18, width: 700}}> {this.state.product.item_description}</div>
                    <div style={{marginTop: 20}}>
                        <img src={this.state.product.image_url}/> <br/>
                    </div>
                    <div style={{fontSize: 18, marginTop: 20}}> Date ordered: {this.state.product.order_date}</div>
                    <div style={{fontSize: 18}}> Quantity: {this.state.product.count}</div>
                </div> 
            </div>
        )      
    }
}