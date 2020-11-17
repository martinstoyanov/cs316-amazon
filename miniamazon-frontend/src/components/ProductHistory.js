import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';

const serverURL = "http://localhost:8888"
const userId = localStorage.getItem('token')

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
            <div style={{marginBottom: 50, paddingTop: 40, paddingLeft: 40}}>
                <div>
                    <div style={{display: 'flex', width: 700, justifyContent: 'space-between'}}>
                        <a href={"/items/" + this.state.product._id}>
                            <div className="blue-font" style={{fontSize: 24}}> <b>{this.state.product.item_name}</b></div><br/>
                        </a>
                        <div style={{fontSize: 22}}> <b>${this.state.product.item_price}</b></div><br/>
                    </div>
                    <div style={{fontSize: 18, width: 700}}> {this.state.product.item_description}</div><br/>
                    <div style={{marginTop: 20}}>
                        <img src={this.state.product.image_url}/> <br/>
                    </div>
                    <div style={{fontSize: 18, marginTop: 20}}> Date ordered: <b>{this.state.product.order_date}</b></div><br/>
                    <div style={{fontSize: 18}}> Quantity: <b>{this.state.product.count}</b></div><br/>
                </div> 
            </div>
        )      
    }
}