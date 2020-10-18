import React from 'react';
import Product from './Product';
import axios from 'axios';

/*function Cart(){
    var isCheckedOut = false;

    var cartID = 123456;
    var orderID = 987654;

    var orderName = "John Appleseed"
    var shippingAddressLine1 = "123 CS Lane"
    var shippingAddressLine2 = "Apt # 111"
    var shippingAddressCity = "Durham"
    var shippingAddressState = "NC"
    var shippingAddressZip = "27708"
    var orderPrice = 12.3;
    var orderStatus = "Ordered"
    var orderDate = "12-1-2020"
    var deliveryDate = "12-10-2020"

    var paymentCardNumber = "12334566890985"    
    var paymentExpire = "12-01-2020"
    var paymentSecurityCode = "123"
    var paymentName = "Johnny Appleseed"

    var billingName = "John App"
    var billingAddressLine1 = "123 CompSci Lane"
    var billingAddressLine2 = "PO: 123"
    var billingAddressCity = "Durham"
    var billingAddressState = "NC"
    var billingAddressZip = "27706"
*/
    
    const serverURL = "http://localhost:8888"
    export default class Cart extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
              orderID: "",
              orderName: "",
              shippingAddressLine1: "",
              shippingAddressLine2: "",
              shippingAddressCity: "",
              shippingAddressState: "",
              shippingAddressZip: "",
              paymentCardNumber: "",
              paymentCardExpire: "",
              paymentCardSecurityCode: "",
              paymentCardName: "",
              billingName: "",
              billingAddressLine1: "",
              billingAddressLine2: "",
              billingAddressCity: "",
              billingAddressState: "",
              billingAddressZip: "",
              orderPrice: 0.0,
              orderStatus: "",
              orderDate: "",
              orderDeliveryDate: "",
              orderDateCheckedOut: "",
              orderPrice: false
            };
        }
         setOrderID(event) {
            this.state ({orderID: event.target.value})
        }
         setOrderName(event) {
            this.state ({orderName: event.target.value})
        }
         setShippingAddressLine1(event) {
            this.state ({shippingAddressLine1: event.target.value})
        }
        setShippingAddressLine2(event) {
            this.state ({shippingAddressLine2: event.target.value})
        }
         setShippingAddressCity(event) {
            this.state ({shippingAddressCity: event.target.value})
        }
         setShippingAddressState(event) {
            this.state ({shippingAddressState: event.target.value})
        }
        setShippingAddressZip(event) {
            this.state ({shippingAddressZip: event.target.value})
        }
        setPaymentCardNumber(event) {
            this.state ({paymentCardNumber: event.target.value})
        }
        setPaymentCardExpire(event) {
            this.state ({paymentCardExpire: event.target.value})
        }
        setPaymentCardSecurityCode(event) {
            this.state ({paymentCardSecurityCode: event.target.value})
        }
        setPaymentCardName(event) {
            this.state ({paymentCardName: event.target.value})
        }
        setBillingName(event) {
            this.state ({billingName: event.target.value})
        }
        setBillingAddressLine1(event) {
            this.state ({billingAddressLine1: event.target.value})
        }
        setBillingAddressLine2(event) {
            this.state ({billingAddressLine2: event.target.value})
        }
        setBillingAddressCity(event) {
            this.state ({billingAddressCity: event.target.value})
        }
        setBillingAddressState(event) {
            this.state ({billingAddressState: event.target.value})
        }
        setBillingAddressZip(event) {
            this.state ({billingAddressZip: event.target.value})
        }
        setOrderPrice(event) {
            this.state ({orderPrice: event.target.value})
        }
        setOrderStatus(event) {
            this.state ({orderStatus: event.target.value})
        }
        setOrderDate(event) {
            this.state ({orderDate: event.target.value})
        }
        setOrderDeliveryDate(event) {
            this.state ({orderDeliveryDate: event.target.value})
        }
        setOrderDateCheckedOut(event) {
            this.state ({orderDateCheckedOut: event.target.value})
        } 
        render(){
            return(
                <nav className="left-layout">
                    <h1>CART</h1>
                    <h5>Below will list out your cart items.</h5>
                    <div>
                        {productList}
                    </div>
                    <div id="shipping">
                        <h2>CHECKOUT:</h2>
                        <table className="shipping-inputs">
                            <tbody>
                                <tr><td><p className = "label"><h3>Step 1: Shipping Address</h3></p></td></tr>
                                <tr id="order-name">
                                    <td><p className = "label">First and Last Name: </p></td>
                                    <td><input type = "text" className = "set-order-name" onChange = {this.setOrderName}/></td>
                                </tr>
                                <tr id="shipping-address-line1">
                                    <td><p className = "label">Address Line 1: </p></td>
                                    <td><input type = "text" className = "set-shipping-address" onChange = {this.setShippingAddressLine1}/></td>
                                </tr>
                                <tr id="shipping-address-line2">
                                    <td><p className = "label">Address Line 2: </p></td>
                                    <td><input type = "text" className = "set-shipping-address" onChange = {this.setShippingAddressLine2}/></td>
                                </tr>
                                <tr id="shipping-address-city">
                                    <td><p className = "label">City: </p></td>
                                    <td><input type = "text" className = "set-shipping-address" onChange = {this.setShippingAddressCity}/></td>
                                </tr>
                                <tr id="shipping-address-state">
                                    <td><p className = "label">State: </p></td>
                                    <td><input type = "text" className = "set-shipping-address" onChange = {this.setShippingAddressState}/></td>
                                </tr>
                                <tr id="shipping-address-zip">
                                    <td><p className = "label">Zip Code: </p></td>
                                    <td><input type = "text" className = "set-shipping-address" onChange = {this.setShippingAddressZip}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
        
                    <div id="payment">
                        <table className="payment-inputs">
                            <tbody>
                                <tr><td><p className = "label"><h3>Step 2: Payment Method</h3></p></td></tr>
                                <tr id="payment-card-number">
                                    <td><p className = "label">Credit Card Number:</p></td>
                                    <td><input type = "text" className = "set-payment" onChange = {this.setPaymentCardNumber}/></td>
                                </tr>
                                <tr id="payment-expire">
                                    <td><p className = "label">Expiration Date (MM/YY):</p></td>
                                    <td><input type = "text" className = "set-payment" onChange = {this.setPaymentExpire}/></td>
                                </tr>
                                <tr id="payment-security-code">
                                    <td><p className = "label">Security Code:</p></td>
                                    <td><input type = "text" className = "set-payment" onChange = {this.setPaymentSecurityCode}/></td>
                                </tr>
                                <tr id="payment-name">
                                    <td><p className = "label">Name on Card:</p></td>
                                    <td><input type = "text" className = "set-payment" onChange = {this.setPaymentName}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
        
                    <div id="billing">
                        <table className="billing-inputs">
                            <tbody>
                                <tr><td><p className = "label"><h3>Step 3: Billing Information</h3></p></td></tr>
                                <tr id="billing-name">
                                    <td><p className = "label">First and Last Name: </p></td>
                                    <td><input type = "text" className = "set-billing-name" onChange = {this.setBillingName}/></td> ********
                                </tr>
                                <tr id="billing-address-line1">
                                    <td><p className = "label">Address Line 1: </p></td>
                                    <td><input type = "text" className = "set-billing-address" onChange = {this.setBillingAddressLine1}/></td>
                                </tr>
                                <tr id="billing-address-line2">
                                    <td><p className = "label">Address Line 2: </p></td>
                                    <td><input type = "text" className = "set-billing-address" onChange = {this.setBillingAddressLine2}/></td>
                                </tr>
                                <tr id="billing-address-city">
                                    <td><p className = "label">City: </p></td>
                                    <td><input type = "text" className = "set-billing-address" onChange = {this.setBillingAddressCity}/></td>
                                </tr>
                                <tr id="billing-address-state">
                                    <td><p className = "label">State: </p></td>
                                    <td><input type = "text" className = "set-billing-address" onChange = {this.setBillingAddressState}/></td>
                                </tr>
                                <tr id="billing-address-zip">
                                    <td><p className = "label">Zip Code: </p></td>
                                    <td><input type = "text" className = "set-billing-address" onChange = {this.setBillingAddressZip}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
                    <div>
                        <a href="/thanks">
                            <button className="btn btn-secondary" onClick={setCheckedOut}>CHECKOUT!</button><br/>
                        </a>
                    </div><br/><br/>
                </nav>
            )
        }
    

    /*const products = [
        {
            itemID: 1,
            itemName: "item 1",
            itemImage: "something",
            itemDescription: "This is a cool product #1",
            itemPrice: 12
        },
        {
            itemID: 2,
            itemName: "item 2",
            itemImage: "something",
            itemDescription: "This is a cool product #2",
            itemPrice: 12
        },
    ]
    const productList = products.map(product => 
        <Product product ={product}></Product>
    )*/

    
    componentDidMount() {
        axios.get(`${serverURL}/items`).then((response) => {
            this.setState({products: response.data.data})
        });
    }}

