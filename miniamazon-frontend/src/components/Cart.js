import React from 'react';
import axios from 'axios';
import ProductCart from './ProductCart';
import { useAlert } from 'react-alert'
    
const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"
//const alert = useAlert()

export default class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this)
        this.state = {
            isShippingEntered: false,
            isPaymentEntered: false,
            isBillingEntered: false,
            isBillingSame: false,
            isCheckingOut: false,
            isReviewingInformation: false,
            isCheckoutButton1Visible: true,
            initialRender: true,

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
            products: [],
            items: [],
            cart: {}
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

    handler(products) {
        this.setState({
            products: products
        })
    }

    checkout = async() => {
        const u = await axios.get(`${serverURL}/user/${userId}`);
        let user = u.data.data

        if (user.balance < this.state.orderPrice) {
            alert("Not enough funds in account to purchase")
            return
        }

        for (var i = 0; i < this.state.products.length; i++) {
            let p = this.state.products[i]
            if (p.quantity < parseInt(p.count)) {
                alert("Not enough of " + p.item_name + " left in stock")
                return
            }
        }

        for (var i = 0; i < this.state.products.length; i++) {
            let p = this.state.products[i]
            p.quantity -= parseInt(p.count)
            const res = await axios.put(`${serverURL}/item/${p._id}`, p)
            let sellerId = p.sold_by
            const s = await axios.get(`${serverURL}/user/${sellerId}`)
            let seller = s.data.data
            seller.balance += p.item_price * p.count
            const s_res = await axios.put(`${serverURL}/user/${seller._id}`, seller)

            const so = await axios.get(`${serverURL}/seller/${sellerId}`)
            let seller_object = so.data.data
            let seen = false
            seller_object.items_sold.forEach(i => {
                if (i[0] === p._id) {
                    let count = parseInt(i[1])
                    count += p.count
                    i[1] = count.toString()
                    seen = true
                }
            })
            if (!seen) {
                seller_object.items_sold.push([p._id, p.count])
            }
            const so_res = await axios.put(`${serverURL}/seller/${seller_object._id}`, seller_object)
        }

        user.balance -= this.state.orderPrice
        axios.put(`${serverURL}/user/${user._id}`, user).then((res) => {
            var currentdate = new Date(); 
            var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

            let order = {
                order_address: this.state.shippingAddressLine1 + " " + this.state.shippingAddressLine2 + ", " + this.state.shippingAddressCity
                    + ", " + this.state.shippingAddressState + " " + this.state.shippingAddressZip,
                order_payment: this.state.paymentCardNumber,
                order_price: this.state.orderPrice,
                order_status: "placed",
                user_id: userId,
                items: this.state.items,
                order_date: datetime,
                delivery_date: datetime
            }

            axios.post(`${serverURL}/order`, order).then((response) => {
                user.orders.push(response.data.order_id)
                axios.put(`${serverURL}/user/${user._id}`, user).then((res) => {
                    this.state.cart.items = []
                    axios.put(`${serverURL}/cart/${this.state.cart._id}`, this.state.cart).then((res) => {
                        window.location.href = '/thanks'
                    })
                })
            });
        })

    }

    componentDidMount() {
        this.setState({ initialRender: true })
        axios.get(`${serverURL}/cart/${userId}`).then((response1) => {
            this.setState({cart: response1.data.data})
            let items = response1.data.data.items
            this.setState({items: items})
            let products = []
            let total = 0.0

            items.forEach(i => {
                axios.get(`${serverURL}/item/${i[0]}`).then((p) => {
                    let item = p.data.data
                    item.count = i[1]
                    products.push(item)
                    total += item.item_price * item.count
                    this.setState({ products: products, orderPrice: total})
                })
            })
        });
    }

    componentDidUpdate() {
        if (!this.state.initialRender)
            this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
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
        this.setState({isCheckingOut: true, initialRender: false})
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
        let nextButtonShipping;
        let nextButtonPayment;
        let nextButtonBilling;

        let checkoutButton1;

        // if (isCheckoutButton1Visible) {
        //     checkoutButton1 = 
        //     <nav>
        //         <button className="btn btn-secondary" onClick={this.setCheckingOut}><b>CHECKOUT</b></button>
        //     </nav>
        // }

        if (isCheckingOut && !isShippingEntered) {
            nextButtonShipping = <button className="btn btn-secondary" onClick={this.setShippingEntered}><b>NEXT</b></button>
        }
        if (isShippingEntered && !isPaymentEntered) {
            nextButtonPayment = <button className="btn btn-secondary" onClick={this.setPaymentEntered}><b>NEXT</b></button>
        }

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
                        {nextButtonShipping}
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
                        {nextButtonPayment}
                    </div>
                </div><br/>
            </nav>
        }

        if(isPaymentEntered) {
            billingAddress =
            <nav>
                <div id="billing">
                    <div>
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
                <button className="btn btn-secondary" onClick={this.checkout}><b>CHECKOUT!</b></button><br/><br/>
            </nav>
        }

        return(
            <nav className="left-layout">
                <h1 style={{marginBottom: 50}}>Your Items</h1>
                { this.state.products.map(product => <ProductCart key={product._id} product={product} handler = {this.handler}></ProductCart>)}<br/>
                <div style={{marginBottom: 50, fontSize: 24}}>Total: ${this.state.orderPrice}</div>

                <nav>
                    <button className="btn btn-secondary" onClick={this.setCheckingOut}><b>CHECKOUT</b></button><br/><br/>
                </nav>

                <div>
                    {shippingAddress}
                    {paymentMethod}
                    {billingAddress}
                    {reviewInformation}
                </div>

                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>

            </nav>
        )
    }
    
}

