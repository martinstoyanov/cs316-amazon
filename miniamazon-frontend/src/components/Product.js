import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'

function Product({product}){

    const serverURL = "http://localhost:3000"
    const userId = "5f8b8eee77a1ab596021f8c4"
    const alert = useAlert()

    function addToCart(e) {
        axios.get(`${serverURL}/cart/${userId}`).then(response => {
            let cart = response.data.data

            cart.items.push(product._id)

            axios.put(`${serverURL}/cart/${userId}`, cart).then(response => {
                if (response.status === 200) {
                    alert.show('Item successfully added to cart!')
                }
                else {
                    alert.show('An error occured')
                }
            })
        })
    }

    return(
        <div>
            <h2>
                Item name: {product.item_name} <br/>
                Description: {product.item_description} <br/>
                {product.item_image} <br/>
                Price: ${product.item_price} 
                <div>
                    <button className="btn btn-secondary" onClick={addToCart}>Add to cart</button><br/>
                </div>
                <br/>
            </h2> 
        </div>
    )
}

export default Product;