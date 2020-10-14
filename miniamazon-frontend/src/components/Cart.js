import React from 'react';
import Product from './Product';

function Cart(){
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

    function setOrderID(event) {
        orderID = event.target.value;
    }
    function setOrderName(event) {
        orderName = event.target.value;
    }
    function setShippingAddressLine1(event) {
        shippingAddressLine1 = event.target.value;
    }
    function setShippingAddressLine2(event) {
        shippingAddressLine2 = event.target.value;
    }
    function setShippingAddressCity(event) {
        shippingAddressCity = event.target.value;
    }
    function setShippingAddressState(event) {
        shippingAddressState = event.target.value;
    }
    function setShippingAddressZip(event) {
        shippingAddressZip = event.target.value;
    }
    function setPaymentCardNumber(event) {
        paymentCardNumber = event.target.value;
    }
    function setPaymentExpire(event) {
        paymentExpire = event.target.value;
    }
    function setPaymentSecurityCode(event) {
        paymentSecurityCode = event.target.value;
    }
    function setPaymentName(event) {
        paymentName = event.target.value;
    }
    function setBillingName(event) {
        orderName = event.target.value;
    }
    function setBillingAddressLine1(event) {
        shippingAddressLine1 = event.target.value;
    }
    function setBillingAddressLine2(event) {
        shippingAddressLine2 = event.target.value;
    }
    function setBillingAddressCity(event) {
        shippingAddressCity = event.target.value;
    }
    function setBillingAddressState(event) {
        shippingAddressState = event.target.value;
    }
    function setBillingAddressZip(event) {
        shippingAddressZip = event.target.value;
    }
    function setOrderPrice(event) {
        orderPrice = event.target.value;
    }
    function setOrderStatus(event) {
        orderStatus = event.target.value;
    }
    function setOrderDate(event) {
        orderDate = event.target.value;
    }
    function setDeliveryDate(event) {
        deliveryDate = event.target.value;
    }
    function setCheckedOut(event) {
        isCheckedOut = true;
    }

    const products = [
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
    )

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
                            <td><input type = "text" className = "set-order-name" onChange = {setOrderName}/></td>
                        </tr>
                        <tr id="shipping-address-line1">
                            <td><p className = "label">Address Line 1: </p></td>
                            <td><input type = "text" className = "set-shipping-address" onChange = {setShippingAddressLine1}/></td>
                        </tr>
                        <tr id="shipping-address-line2">
                            <td><p className = "label">Address Line 2: </p></td>
                            <td><input type = "text" className = "set-shipping-address" onChange = {setShippingAddressLine2}/></td>
                        </tr>
                        <tr id="shipping-address-city">
                            <td><p className = "label">City: </p></td>
                            <td><input type = "text" className = "set-shipping-address" onChange = {setShippingAddressCity}/></td>
                        </tr>
                        <tr id="shipping-address-state">
                            <td><p className = "label">State: </p></td>
                            <td><input type = "text" className = "set-shipping-address" onChange = {setShippingAddressState}/></td>
                        </tr>
                        <tr id="shipping-address-zip">
                            <td><p className = "label">Zip Code: </p></td>
                            <td><input type = "text" className = "set-shipping-address" onChange = {setShippingAddressZip}/></td>
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
                            <td><input type = "text" className = "set-payment" onChange = {setPaymentCardNumber}/></td>
                        </tr>
                        <tr id="payment-expire">
                            <td><p className = "label">Expiration Date (MM/YY):</p></td>
                            <td><input type = "text" className = "set-payment" onChange = {setPaymentExpire}/></td>
                        </tr>
                        <tr id="payment-security-code">
                            <td><p className = "label">Security Code:</p></td>
                            <td><input type = "text" className = "set-payment" onChange = {setPaymentSecurityCode}/></td>
                        </tr>
                        <tr id="payment-name">
                            <td><p className = "label">Name on Card:</p></td>
                            <td><input type = "text" className = "set-payment" onChange = {setPaymentName}/></td>
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
                            <td><input type = "text" className = "set-billing-name" onChange = {setBillingName}/></td>
                        </tr>
                        <tr id="billing-address-line1">
                            <td><p className = "label">Address Line 1: </p></td>
                            <td><input type = "text" className = "set-billing-address" onChange = {setBillingAddressLine1}/></td>
                        </tr>
                        <tr id="billing-address-line2">
                            <td><p className = "label">Address Line 2: </p></td>
                            <td><input type = "text" className = "set-billing-address" onChange = {setBillingAddressLine2}/></td>
                        </tr>
                        <tr id="billing-address-city">
                            <td><p className = "label">City: </p></td>
                            <td><input type = "text" className = "set-billing-address" onChange = {setBillingAddressCity}/></td>
                        </tr>
                        <tr id="billing-address-state">
                            <td><p className = "label">State: </p></td>
                            <td><input type = "text" className = "set-billing-address" onChange = {setBillingAddressState}/></td>
                        </tr>
                        <tr id="billing-address-zip">
                            <td><p className = "label">Zip Code: </p></td>
                            <td><input type = "text" className = "set-billing-address" onChange = {setBillingAddressZip}/></td>
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

export default Cart;