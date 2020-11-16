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
        let product = this.state.product
        if (product.item_description.length > 250) {
            let description_short = product.item_description.slice(0, 250) + "..."
            product.item_description = description_short
            this.setState({product: product})
        }
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
            <div className= "product-border" style={{marginBottom: 50}}>
                <div>
                    <div style={{display: 'flex', width: 700, justifyContent: 'space-between'}}>
                        <a className="blue-font" href={"/items/" + this.state.product._id}>
                            <div style={{fontSize: 24}}><b>{this.state.product.item_name}</b></div>
                        </a>
                        <div style={{fontSize: 22}}> <b>${this.state.product.item_price}</b></div>
                    </div>
                    <div style={{fontSize: 18, width: 700}}> {this.state.product.item_description}</div>
                    <div style={{marginTop: 20}}>
                        <img src={this.state.product.image_url}/> <br/>
                    </div>
                    <div style={{fontSize: 18}}> Quantity: {this.state.product.count}</div>
                    <div style={{marginTop: 20}}>
                        <button className="btn btn-danger" onClick={this.removeItem}>Remove</button><br/>
                    </div>
                </div> 
            </div>
        )      
    }
}