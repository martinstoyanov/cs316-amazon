import React from 'react';
import axios from 'axios';
import SellerList from './SellerList'; //should get products from here
    
const serverURL = "https://miniamazon-sp9m9.ondigitalocean.app"
    const userId = localStorage.getItem('token')

    export default class SellerEdit extends React.Component{
        constructor(props) {
            super(props);
            var url = window.location.pathname;
            var id = url.substring(url.lastIndexOf('/')+1);
            this.state = {

                product: "",
                productID: id, 
                item_name: "",
                item_description: "",
                item_url: "",
                item_price:0.0,
                soldby: "", //this should be set to current user
                category_name: "",
                quantity: 0
            };



            this.setProductID = this.setProductID.bind(this);
            this.setProductName = this.setProductName.bind(this);
            this.setItemDescription= this.setItemDescription.bind(this);
            this.setProductURL = this.setProductURL.bind(this);
            this.setSoldBy= this.setSoldBy.bind(this);
            this.setItemPrice= this.setItemPrice.bind(this);
            this.setCategoryName= this.setCategoryName.bind(this);
            this.setItemQuantity= this.setItemQuantity.bind(this);
        }

        setProductID(event) {
            this.setState({productID: event.target.value})
        }
        setProductName(event) {
            this.setState({item_name: event.target.value})
        }
        setItemDescription(event) {
            this.setState({item_description: event.target.value})
        }
        setProductURL(event) {
            this.setState({item_url: event.target.value})
        }
        setItemDescription(event) {
            this.setState({item_description: event.target.value})
        }
        setItemPrice(event) {
            console.log(this);
            this.setState({item_price: event.target.value})
        }
        setSoldBy(event) {
            this.setState({soldby: event.target.value})/* idk if we need this if we keep up with userid through something else */
        }
        setCategoryName(event) {
            this.setState({category_name: event.target.value})
        }
        setItemQuantity(event) {
            this.setState({quantity: event.target.value})
        }

        componentDidMount() {
            axios.get(`${serverURL}/item/${this.state.productID}`).then((response1) => {
                console.log(response1.data.data)
                this.setState( {product: response1.data.data})
                let product=this.state.product;
                this.setState({item_name: product.item_name})
                this.setState({item_description: product.item_description})
                this.setState({item_url: product.item_url})
                this.setState({item_price: product.item_price})
                this.setState({sold_by: product.sold_by})
                this.setState({category_name: product.category_name})
                this.setState({quantity: product.quantity}) });

        }

        updateToSellerList(e) {

       
            axios.put(`${serverURL}/item/${this.state.productID}`, {
                item_name: this.state.item_name,sold_by: this.state.userId, 
                item_description: this.state.item_description, 
                item_url: this.state.item_url,
                sold_by: userId,
                category_name: this.state.category_name, item_price: this.state.item_price, 
                quantity: this.state.quantity})
                .then((response1) => {
                    console.log(response1);
                }, (error) => {
            
                });
    
            window.location.replace("/account/seller/products");
        }

        

        render(){

            return(
                
                <nav className="left-layout">
                <div id="updatingProduct">
                    <table className="updatingProducts-inputs">
                        <tbody>
                            <tr><td><p className="yellow-font"><h1><b>Update Product</b></h1></p></td></tr><br/>
                            <tr id="product-name">
                                <td><p className = "label"><b>Product Name:</b> </p></td>
                                <td><input type = "text" defaultValue= {this.state.product.item_name} onChange = {this.setProductName}/></td>
                            </tr>
                            <tr id="product-description">
                                <td><p className = "label"><b>Product Description:</b> </p></td>
                                <td><input type = "text" defaultValue={this.state.product.item_description} onChange = {this.setItemDescription}/></td>
                            </tr>
                            <tr id="product-Image">
                                <td><p className = "label"><b>Product Image:</b> </p></td>
                                <td><input type = "text" defaultValue={this.state.product.item_url} onChange = {this.setProductURL}/></td>
                            </tr>
                            <tr id="product-price">
                                <td><p className = "label"><b>Price: </b></p></td>
                                <td><input type = "text"  defaultValue = {this.state.product.item_price} onChange = {this.setItemPrice}/></td>
                            </tr>
                            <tr id="product-category">
                                <td><p className = "label"><b>Category:</b> </p></td>
                                <td><input type = "text" defaultValue={this.state.product.category_name}  onChange = {this.setCategoryName}/></td>
                            </tr>
                            <tr id="product-quantity">
                                <td><p className = "label"><b>Quantity:</b> </p></td>
                                <td><input type = "text"  defaultValue={this.state.product.quantity} onChange = {this.setItemQuantity}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
                <div>
                    <button className="button button1" onClick = {this.updateToSellerList.bind(this)}><b>Update Product</b></button><br/><br/>
                </div>
            </nav>
            )
        } 

          
    }