import React from 'react';
import axios from 'axios';
import SellerProduct from './SellerProduct';

const serverURL = "http://localhost:8888"
//const userId = "5fab28d3d831520e449fa83e"
const userId = "5f8b8eee77a1ab596021f8c4"

export default class SellerDelete extends React.Component{
    constructor(props) {
        super(props);
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/')+1);
        this.state = {
            wantToDelete: true,

            sellerID: "",
            productID: id,
            product: ""
            
            
            };
            
            this.setWantToDelete= this.setWantToDelete.bind(this);

            this.setSellerID= this.setSellerID.bind(this);
            this.setProductID= this.setProductID.bind(this);
            this.setProduct= this.setProduct.bind(this);
            //console.log(productID);
            


        }
        componentDidMount() {
            //let product = this.state.product
            //this.setState({product: product})
               axios.get(`${serverURL}/item/${this.state.productID}`).then((response1) => {
                  console.log(response1.data.data)
                  this.setState( {product: response1.data.data})});

            /*db.items.find(
                {"soldby": "5f8b8eee77a173h96021f8y0" } back end might not link to this properly. there is a disconnect
            ) */
        }
        setWantToDelete(event) {
            this.setState({wantToDelete: true})
        }
        setSellerID(event) {
            this.setState({sellerID: event.target.value})
        }
        setProductID(event) {
            this.setState({productID: event.target.value})
        }
        setProduct(event) {
            this.setState({product: event.target.value})
        }

        deleteFromSellerList(e) {
            console.log ("b4 axios call");
       
            axios.delete(`${serverURL}/item/${this.state.productID}`, {_id: this.state.productID,})
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

        render() {

            let wantToDelete;
            let deleteButton;
            let product= this.state.product;

            // if(wantToDelete) {
            //     deleteButton = 
            //     <nav>
                
            //         <button className="btn btn-secondary" onClick = {this.deleteFromSellerList.bind(this)}><b>Delete This Product</b></button><br/><br/> 
            //         {/* At this point the product should be in our database*/}
                
            //     </nav>
            // }

            return(
                <nav className="left-layout">
                    <h2 className="red-font"><b>Are you sure you want to delete this item?</b></h2> <br/>
                    <h4 className="red-font"><b>This cannot be undone.</b></h4> <br/>
                    <div className= "product-border" style={{marginBottom: 40}}>
                    <div>
                        <div style={{display: 'flex', width: 600, justifyContent: 'space-between'}}>
                            <a href={"/items/" + product._id}>
                                <div className="blue-font" style={{fontSize: 24}}> <b>{product.item_name}</b></div>
                            </a>
                            <div style={{fontSize: 22}}> <b>${product.item_price}</b></div>
                        </div>
                        <div style={{fontSize: 18, width: 700}}> {product.item_description}</div>
                        <div style={{marginTop: 20}}>
                            <img src={product.image_url}/> <br/>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger" onClick = {this.deleteFromSellerList.bind(this)}><b>Delete This Product</b></button><br/><br/> 
                    </div>
                    </div>
                </nav>
            )
        }

        }