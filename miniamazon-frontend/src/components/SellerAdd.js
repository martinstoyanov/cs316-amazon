import React from 'react';
import axios from 'axios';
import Product from './Product';
import ProductCart from './ProductCart';
import { Redirect } from 'react-router-dom';

//import SellerEdit from '.SellerEdit';
//this is not specific to one seller's products. must fix
    
    const serverURL = "http://localhost:8888"
    //const userId = "5fab28d3d831520e449fa83e"
    const userId = "5f8b8eee77a1ab596021f8c4"

    export default class SellerAdd extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isInformationEntered: true,
                isAddingNewProduct: true,
                isAddProductButtonVisible: true,

                productID: "",
                item_name: "",
                item_description: "",
                item_url: "", //I am not sure how to implement this
                item_price: 0.0,
                sold_by: "", //this should be set to current user
                category_name: "",
                quantity: 0
            };
            this.setInformationEntered = this.setInformationEntered.bind(this);
            this.setAddingNewProduct = this.setAddingNewProduct.bind(this);
            this.setAddNewProductButtonVisible = this.setAddNewProductButtonVisible.bind(this);
            
            this.setProductID = this.setProductID.bind(this);
            this.setProductName = this.setProductName.bind(this);
            this.setItemDescription= this.setItemDescription.bind(this);
            this.setItemPrice= this.setItemPrice.bind(this);
            this.setProductURL = this.setProductURL.bind(this);
            this.setSoldBy= this.setSoldBy.bind(this);
            this.setCategoryName= this.setCategoryName.bind(this);
            this.setItemQuantity= this.setItemQuantity.bind(this);

    }

    //unsure of how this works
    componentDidMount() {
        /*axios.get(`${serverURL}/cart/${userId}`).then((response1) => {
            axios.get(`${serverURL}/items`).then((response2) => {
                let items = response1.data.data.items
                let products = []
                items.forEach(i => {
                    response2.data.data.forEach(product => {
                        if (i === product._id) {
                            products.push(product)
                        }
                    })
                })
                this.setState({ products: products })
            });
        });*/
    }


    setInformationEntered(event) {
        this.setState({isInformationEntered: true})
    }
    setAddingNewProduct(event) {
        this.setState({isAddingNewProduct: true})
    }
    setAddNewProductButtonVisible(event) {
        this.setState({isAddProductButtonVisible: false})
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

    addToSellerList(e) {
       
        axios.post(`${serverURL}/item`, {
            item_name: this.state.item_name,sold_by: this.state.userId, 
            item_description: this.state.item_description, 
            category_name: this.state.category_name, item_price: this.state.item_price, 
            quantity: this.state.quantity})
            .then((response1) => {
                console.log(response1);
                
            }, (error) => {
                 //use this to verify what is  this.state.id
        
            });
            
        // axios.put(`${serverURL}/item/${this.state.productID}`, this.state.productID).then(response => {
        //     if (response.status === 200) {
        //         alert.show('Item successfully added to your list!')
        //     }
        //     else {
        //         alert.show('An error occured')
        //     }
        // })

        window.location.replace("/account/seller/products");
    }

    render(){
        const isInformationEntered = this.state.isInformationEntered;
        const isAddingNewProduct = this.state.isAddingNewProduct;

        const isAddProductButtonVisible = this.isAddProductButtonVisible;

        let productInfo;
        let informationEntered;
        let addProductButtont;



        if (isAddingNewProduct) {
            productInfo = 
            <nav>
                <div id="addingProduct">
                    <table className="addingProducts-inputs">
                        <tbody>
                            <tr><td><p className = "label"><h3>Step 1: Enter New Product Info</h3></p></td></tr>
                            <tr id="product-name">
                                <td><p className = "label">Product Name: </p></td>
                                <td><input type = "text" value={this.state.item_name} onChange = {this.setProductName}/></td>
                            </tr>
                            <tr id="product-description">
                                <td><p className = "label">Product Description: </p></td>
                                <td><input type = "text" value={this.state.item_description} onChange = {this.setItemDescription}/></td>
                            </tr>
                            {/* I need to add sellerID (soldBy) and picture (itemURL)*/}
                            <tr id="product-price">
                                <td><p className = "label">Price: </p></td>
                                <td><input type = "text"  onChange = {this.setItemPrice}/></td>
                            </tr>
                            <tr id="product-category">
                                <td><p className = "label">Category: </p></td>
                                <td><input type = "text" value={this.state.category_name}  onChange = {this.setCategoryName}/></td>
                            </tr>
                            <tr id="product-quantity">
                                <td><p className = "label">Quantity: </p></td>
                                <td><input type = "text"  onChange = {this.setItemQuantity}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
            </nav>
        }

        if(isInformationEntered) {
            informationEntered = 
            <nav>
            
                <button className="btn btn-success" onClick = {this.addToSellerList.bind(this)}><b>Add Product!</b></button><br/><br/> 
                {/* At this point the product should be in our database*/}
            
            </nav>
        }


        return(
            <nav className="left-layout">
                <h1>Add A New Product</h1>
                <h5>Please fill out the information below.</h5>
                <div>
                    {productInfo}
                    {informationEntered}
                </div>
            </nav>
        )
    }
    
}