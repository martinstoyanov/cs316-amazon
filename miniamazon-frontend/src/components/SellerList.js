import React from 'react';
import axios from 'axios';
import SellerProduct from './SellerProduct';
//import SellerEdit from '.SellerEdit';
//this is not specific to one seller's products. must fix
    
    const serverURL = "http://localhost:8888"
    const userId = "5f8b8eee77a173h96021f8y0"

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
            axios.get(`${serverURL}/items/`).then((response1) => {
                console.log(response1.data.data)
                this.setState( {products: response1.data.data})
                
            });

            /*db.items.find(
                {"soldby": "5f8b8eee77a173h96021f8y0" } back end might not link to this properly. there is a disconnect
            ) */
        }
    
    
        render() {
            return(
                <nav className="left-layout">
                    <div>
                        <br/>
                        <a href="/account/seller/add-products">
                            <button className="btn btn-success">Add A New Product</button><br/>
                        </a>
                        <br/>
                    </div>
                    <h1 className="title">Your Products</h1>
                    <p>
                        Here are the products you sell.
                    </p>
                    <div>
                        {this.state.products.map(product => <SellerProduct key={product._id} product ={product} sellerID= {this.state.sellerID}></SellerProduct>)}
                    </div>
                    
                    
                </nav>
            )
        }
    }