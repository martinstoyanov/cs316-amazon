import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'

function Product({product}){

    const serverURL = "http://localhost:8888"
    const userId = "5f8b8eee77a1ab596021f8c4"
    const alert = useAlert()

    function addToCart(e) {
        axios.get(`${serverURL}/cart/${userId}`).then(response => {
            let cart = response.data.data

            let seen = false
            cart.items.forEach(i => {
                if (i[0] === product._id) {
                    let count = parseInt(i[1])
                    count += 1
                    i[1] = count.toString()
                    seen = true
                }
            })
            if (!seen) {
                cart.items.push([product._id, "1"])
            }

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
        <div style={{marginBottom: 50}}>
            <div>
                <div style={{display: 'flex', width: 500, justifyContent: 'space-between'}}>
                    <div style={{fontSize: 24}}> {product.item_name}</div>
                    <div style={{fontSize: 22}}> ${product.item_price} </div>
                </div>
                <div style={{fontSize: 18}}> {product.item_description}</div>
                {product.item_image} <br/>
                <div>
                    <button className="btn btn-secondary" onClick={addToCart}>Add to cart</button><br/>
                </div>
                <div>
                    <a href={"/items/" + product._id}>
                        <button className="btn btn-secondary">View Full Details</button>
                    </a>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default Product;