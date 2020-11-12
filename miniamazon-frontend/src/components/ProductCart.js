import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

export default class ProductCart extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.product
        }
    }

    componentDidMount() {
        console.log(this.props.product)
    }

    removeItem = () => {
        axios.get(`${serverURL}/cart/${userId}`).then(response => {
            let cart = response.data.data

            //const index = cart.items.indexOf(this.state.product._id)
            let index = -1
            for(var i = 0; i < cart.items.length; i++) {
                if (cart.items[i][0] === this.state.product._id) {
                    index = i
                }
            }
            if (index > -1) {
                cart.items.splice(index, 1);
            }
            else {
                alert('Invalid item')
            }

            axios.put(`${serverURL}/cart/${userId}`, cart).then(response => {
                if (response.status === 200) {
                    //alert('Item removed from cart')
                    window.location.reload(false);
                }
                else {
                    alert('An error occured')
                }
            })
        })
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
                    {this.state.product.item_image} <br/>
                    <a href={"/items/" + this.state.product._id}>
                        <button className="btn btn-secondary">View Full Details</button>
                    </a>
                    <div style={{fontSize: 18}}> Quantity: {this.state.product.count}</div>
                    <div style={{marginTop: 20}}>
                        <button className="btn btn-secondary" onClick={this.removeItem}>Remove</button><br/>
                    </div>
                </div> 
            </div>
        )      
    }
}