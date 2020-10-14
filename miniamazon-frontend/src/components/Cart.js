import React from 'react';
import Product from './Product';

function Cart(){
    var isCheckedOut = false;

    var cartID = 123456;
    var orderID = 987654;
    var orderAddress = "123 CS Lane"
    var orderPayment = "VISA ending in 1234"
    var orderPrice = 12.3;
    var orderStatus = "Ordered"
    var orderDate = "12-1-2020"
    var deliveryDate = "12-10-2020"

    function setOrderID(event) {
        orderID = event.target.value;
    }
    function setOrderAddress(event) {
        orderAddress = event.target.value;
    }
    function setOrderPayment(event) {
        orderPayment = event.target.value;
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
            <div>
                <h2>Shipping Information:</h2>
            </div>
            <table className="inputs">
                <tbody>
                    <tr id="order-address">
                        <td><p className = "label">Shipping Address</p></td>
                        <td><input type = "text" className = "set-order-address" onChange = {setOrderAddress}/></td>
                    </tr>
                    <tr id="order-payment">
                        <td><p className = "label">Payment</p></td>
                        <td><input type = "text" className = "set-order-payment" onChange = {setOrderPayment}/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button className="btn btn-secondary" onClick={setCheckedOut}>CHECKOUT</button><br/><br/>
            </div>
        </nav>
    )
}

export default Cart;