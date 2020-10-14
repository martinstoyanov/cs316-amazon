import React from 'react';
import Order from './Order';

function OrdersList(){
    const orders = [
        {
            orderID: 100,
            orderAddress: "123 Compsci Drive",
            orderPayment: "xxxxxx-xxx-xxx123",
            orderPrice: 134.5,
            orderStatus: "Ordered",
            orderDate: "11-11-2011",
            orderDeliveryDate: "11-25-2011"
        },
        {
            orderID: 101,
            orderAddress: "123 CS Lane",
            orderPayment: "xxxxx-xxxx-xx123",
            orderPrice: 39.83,
            orderStatus: "Shipped",
            orderDate: "11-9-2011",
            orderDeliveryDate: "11-23-2011"
        },
        {
            orderID: 102,
            orderAddress: "123 Computer Science Road",
            orderPayment: "xxx-xxxxx-xxxx-xx2343",
            orderPrice: 233,
            orderStatus: "Delivered",
            orderDate: "11-2-2011",
            orderDeliveryDate: "11-20-2011"
        }
    ]

    const orderList = orders.map(order => 
        <Order order ={order}></Order>
    )

    return(
        <nav className="left-layout">
            <h1 className="title">Your Orders</h1>
            <p>
                Below are your orders.
            </p>
            <div>
                <a href="/shop">
                    <button className="btn btn-secondary">Continue Shopping</button><br/><br/>
                </a>
            </div>
            <div>
                {orderList}
            </div>

        </nav>
    )
}

export default OrdersList;