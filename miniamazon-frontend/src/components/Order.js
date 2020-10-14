import React from 'react';

function Order({order}){
    return(
        <div>
            <h2>
                Order Number: {order.orderID} <br/>
                Shipping Address: {order.orderAddress} <br/>
                Payment Method: {order.orderPayment} <br/>
                Total Price: ${order.orderPrice} <br/>
                Status: {order.orderStatus} <br/>
                Order Date: {order.orderDate} <br/>
                Explected/Actual Delivery Date: {order.orderDeliveryDate} <br/>
            </h2><br/>
        </div> 
    )
}

export default Order;