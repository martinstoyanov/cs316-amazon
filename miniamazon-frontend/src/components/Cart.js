import React from 'react';
import axios from 'axios';
import ProductCart from './ProductCart';
    
    const serverURL = "http://localhost:8888"
    const userId = "5f8b8eee77a1ab596021f8c4"

    export default class Cart extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isShippingEntered: false,
                isPaymentEntered: false,
                isBillingEntered: false,
                isBillingSame: false,
                isCheckingOut: false,
                isReviewingInformation: false,
                isCheckoutButton1Visible: true,

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
                orderPrice: false,
                orders: [],
                products: []
            };

            this.setShippingEntered = this.setShippingEntered.bind(this);
            this.setPaymentEntered = this.setPaymentEntered.bind(this);
            this.setBillingEntered = this.setBillingEntered.bind(this);
            this.setBillingSame = this.setBillingSame.bind(this);
            this.setCheckingOut = this.setCheckingOut.bind(this);
            this.setReviewingInformation = this.setReviewingInformation.bind(this);
            this.setCheckoutButtonInvisible = this.setCheckoutButtonInvisible.bind(this);

            this.setOrderID = this.setOrderID.bind(this);
            this.setOrderName = this.setOrderName.bind(this);
            this.setShippingAddressLine1 = this.setShippingAddressLine1.bind(this);
            this.setShippingAddressLine2 = this.setShippingAddressLine2.bind(this);
            this.setShippingAddressCity = this.setShippingAddressCity.bind(this);
            this.setShippingAddressState = this.setShippingAddressState.bind(this);
            this.setShippingAddressZip = this.setShippingAddressZip.bind(this);
            this.setPaymentCardNumber = this.setPaymentCardNumber.bind(this);
            this.setPaymentCardExpire = this.setPaymentCardExpire.bind(this);
            this.setPaymentCardSecurityCode = this.setPaymentCardSecurityCode.bind(this);
            this.setPaymentCardName = this.setPaymentCardName.bind(this);
            this.setBillingName = this.setBillingName.bind(this);
            this.setBillingAddressLine1 = this.setBillingAddressLine1.bind(this);
            this.setBillingAddressLine2 = this.setBillingAddressLine2.bind(this);
            this.setBillingAddressCity = this.setBillingAddressCity.bind(this);
            this.setBillingAddressState = this.setBillingAddressState.bind(this);
            this.setBillingAddressZip = this.setBillingAddressZip.bind(this);
            this.setOrderPrice= this.setOrderPrice.bind(this);
            this.setOrderStatus= this.setOrderStatus.bind(this);
            this.setOrderDate= this.setOrderDate.bind(this);
            this.setOrderDeliveryDate= this.setOrderDeliveryDate.bind(this);
            this.setOrderDateCheckedOut= this.setOrderDateCheckedOut.bind(this);
        }

        componentDidMount() {
            axios.get(`${serverURL}/cart/${userId}`).then((response1) => {
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
            });
        }

        setShippingEntered(event) {
            this.setState({isShippingEntered: true})
        }
        setPaymentEntered(event) {
            this.setState({isPaymentEntered: true})
        }
        setBillingEntered(event) {
            this.setState({isBillingEntered: true})
        }
        setBillingSame(event) {
            this.setState({isBillingSame: true})
        }
        setCheckingOut(event) {
            this.setState({isCheckingOut: true})
        }
        setReviewingInformation(event) {
            this.setState({isReviewingInformation: true})
        }
        setCheckoutButtonInvisible(event) {
            this.setState({isCheckoutButton1Visible: false})
        }

        setOrderID(event) {
            this.setState({orderID: event.target.value})
        }
        setOrderName(event) {
            this.setState({orderName: event.target.value})
        }
        setShippingAddressLine1(event) {
            this.setState({shippingAddressLine1: event.target.value})
        }
        setShippingAddressLine2(event) {
            this.setState({shippingAddressLine2: event.target.value})
        }
        setShippingAddressCity(event) {
            this.setState({shippingAddressCity: event.target.value})
        }
        setShippingAddressState(event) {
            this.setState({shippingAddressState: event.target.value})
        }
        setShippingAddressZip(event) {
            this.setState({shippingAddressZip: event.target.value})
        }
        setPaymentCardNumber(event) {
            this.setState({paymentCardNumber: event.target.value})
        }
        setPaymentCardExpire(event) {
            this.setState({paymentCardExpire: event.target.value})
        }
        setPaymentCardSecurityCode(event) {
            this.setState({paymentCardSecurityCode: event.target.value})
        }
        setPaymentCardName(event) {
            this.setState({paymentCardName: event.target.value})
        }
        setBillingName(event) {
            this.setState({billingName: event.target.value})
        }
        setBillingAddressLine1(event) {
            this.setState({billingAddressLine1: event.target.value})
        }
        setBillingAddressLine2(event) {
            this.setState({billingAddressLine2: event.target.value})
        }
        setBillingAddressCity(event) {
            this.setState({billingAddressCity: event.target.value})
        }
        setBillingAddressState(event) {
            this.setState({billingAddressState: event.target.value})
        }
        setBillingAddressZip(event) {
            this.setState({billingAddressZip: event.target.value})
        }
        setOrderPrice(event) {
            this.setState({orderPrice: event.target.value})
        }
        setOrderStatus(event) {
            this.setState({orderStatus: event.target.value})
        }
        setOrderDate(event) {
            this.setState({orderDate: event.target.value})
        }
        setOrderDeliveryDate(event) {
            this.setState({orderDeliveryDate: event.target.value})
        }
        setOrderDateCheckedOut(event) {
            this.setState({orderDateCheckedOut: event.target.value})
        } 

        render(){

            const isShippingEntered = this.state.isShippingEntered;
            const isPaymentEntered = this.state.isPaymentEntered;
            const isBillingEntered = this.state.isBillingEntered;
            const isBillingSame = this.state.isBillingSame;
            const isReviewingInformation = this.state.isReviewingInformation;
            const isCheckingOut = this.state.isCheckingOut;

            const isCheckoutButton1Visible = this.isCheckoutButton1Visible;

            let shippingAddress;
            let paymentMethod;
            let billingAddress;
            let reviewInformation;

            let checkoutButton1;

            // if (isCheckoutButton1Visible) {
            //     checkoutButton1 = 
            //     <nav>
            //         <button className="btn btn-secondary" onClick={this.setCheckingOut}><b>CHECKOUT</b></button>
            //     </nav>
            // }

            if (isCheckingOut) {
                shippingAddress = 
                <nav>
                    <div id="shipping">
                        <table className="shipping-inputs">
                            <tbody>
                                <tr><td><p className = "label"><h3>Step 1: Shipping Address</h3></p></td></tr>
                                <tr id="order-name">
                                    <td><p className = "label">First and Last Name: </p></td>
                                    <td><input type = "text" value={this.state.orderName} onChange = {this.setOrderName}/></td>
                                </tr>
                                <tr id="shipping-address-line1">
                                    <td><p className = "label">Address Line 1: </p></td>
                                    <td><input type = "text" value={this.state.shippingAddressLine1} onChange = {this.setShippingAddressLine1}/></td>
                                </tr>
                                <tr id="shipping-address-line2">
                                    <td><p className = "label">Address Line 2: </p></td>
                                    <td><input type = "text" value={this.state.shippingAddressLine2}  onChange = {this.setShippingAddressLine2}/></td>
                                </tr>
                                <tr id="shipping-address-city">
                                    <td><p className = "label">City: </p></td>
                                    <td><input type = "text" value={this.state.shippingAddressCity}  onChange = {this.setShippingAddressCity}/></td>
                                </tr>
                                <tr id="shipping-address-state">
                                    <td><p className = "label">State: </p></td>
                                    <td><input type = "text" value={this.state.shippingAddressState}  onChange = {this.setShippingAddressState}/></td>
                                </tr>
                                <tr id="shipping-address-zip">
                                    <td><p className = "label">Zip Code: </p></td>
                                    <td><input type = "text" value={this.state.shippingAddressZip}  onChange = {this.setShippingAddressZip}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button className="btn btn-secondary" onClick={this.setShippingEntered}><b>NEXT</b></button>
                        </div>
                    </div><br/>
                </nav>
            }

            if(isShippingEntered) {
                paymentMethod = 
                <nav>
                    <div id="payment">
                        <table className="payment-inputs">
                            <tbody>
                                <tr><td><p className = "label"><h3>Step 2: Payment Method</h3></p></td></tr>
                                <tr id="payment-card-number">
                                    <td><p className = "label">Credit Card Number:</p></td>
                                    <td><input type = "text" value={this.state.paymentCardNumber}  onChange = {this.setPaymentCardNumber}/></td>
                                </tr>
                                <tr id="payment-expire">
                                    <td><p className = "label">Expiration Date (MM/YY):</p></td>
                                    <td><input type = "text" value={this.state.paymentCardExpire} onChange = {this.setPaymentCardExpire}/></td>
                                </tr>
                                <tr id="payment-security-code">
                                    <td><p className = "label">Security Code:</p></td>
                                    <td><input type = "text" value={this.state.paymentCardSecurityCode} onChange = {this.setPaymentCardSecurityCode}/></td>
                                </tr>
                                <tr id="payment-name">
                                    <td><p className = "label">Name on Card:</p></td>
                                    <td><input type = "text" value={this.state.paymentCardName} onChange = {this.setPaymentCardName}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button className="btn btn-secondary" onClick={this.setPaymentEntered}><b>NEXT</b></button>
                        </div>
                    </div><br/>
                </nav>
            }

            if(isPaymentEntered) {
                billingAddress =
                <nav>
                    <div id="billing">
                        <div>
                            <button className="btn btn-secondary" onClick={this.setBillingSame}><b>NEXT</b></button>
                            {/* need to make this a checkbox */}
                            {/* need to hide below info when billing is the same */}
                        </div>
                        <table className="billing-inputs">
                            <tbody>
                                <tr><td><p className = "label"><h3>Step 3: Billing Information</h3></p></td></tr>
                                <tr id="billing-name">
                                    <td><p className = "label">First and Last Name: </p></td>
                                    <td><input type = "text" value={this.state.billingName} onChange = {this.setBillingName}/></td>
                                </tr>
                                <tr id="billing-address-line1">
                                    <td><p className = "label">Address Line 1: </p></td>
                                    <td><input type = "text" value={this.state.billingAddressLine1} onChange = {this.setBillingAddressLine1}/></td>
                                </tr>
                                <tr id="billing-address-line2">
                                    <td><p className = "label">Address Line 2: </p></td>
                                    <td><input type = "text" value={this.state.billingAddressLine2} onChange = {this.setBillingAddressLine2}/></td>
                                </tr>
                                <tr id="billing-address-city">
                                    <td><p className = "label">City: </p></td>
                                    <td><input type = "text" value={this.state.billingAddressCity}  onChange = {this.setBillingAddressCity}/></td>
                                </tr>
                                <tr id="billing-address-state">
                                    <td><p className = "label">State: </p></td>
                                    <td><input type = "text" value={this.state.billingAddressState} onChange = {this.setBillingAddressState}/></td>
                                </tr>
                                <tr id="billing-address-zip">
                                    <td><p className = "label">Zip Code: </p></td>
                                    <td><input type = "text" value={this.state.billingAddressZip} onChange = {this.setBillingAddressZip}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
                    <div>
                        <button className="btn btn-secondary" onClick={this.setBillingEntered}><b>REVIEW MY ORDER</b></button><br/><br/>
                    </div>
                </nav>
            }

            if (isBillingEntered) {
                reviewInformation = 
                <nav>
                    <div id="products">
                        { this.state.products.map(product => <ProductCart key={product._id} product={product}></ProductCart>)}<br/>
                    </div>
                    <div id="info">
                        {/* Need to implement displaying order info */}
                    </div>
                    <a href="/thanks">
                        <button className="btn btn-secondary"><b>CHECKOUT!</b></button><br/><br/>
                    </a>
                </nav>
            }

            return(
                <nav className="left-layout">
                    <h1>CART</h1>
                    <h5>Below will list out your cart items.</h5>
                    { this.state.products.map(product => <ProductCart key={product._id} product={product}></ProductCart>)}<br/>

                    <nav>
                        <button className="btn btn-secondary" onClick={this.setCheckingOut}><b>CHECKOUT</b></button><br/><br/>
                    </nav>

                    <div>
                        {shippingAddress}
                        {paymentMethod}
                        {billingAddress}
                        {reviewInformation}
                    </div>

                </nav>
            )
        }
    
}

