import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'
//should convert this to a react.component and 
//add in constructor to take in parameters you passed in

function Product({product}){

    const serverURL = "http://localhost:8888"
    const userId = "5f8b8eee77a1ab596021f8c4"
    const alert = useAlert()

    if (product.item_description.length > 250) {
        let description_short = product.item_description.slice(0, 250) + "..."
        product.item_description = description_short
    }

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
                <div style={{display: 'flex', width: 700, justifyContent: 'space-between'}}>
                    <a href={"/items/" + product._id}>
                        <div style={{fontSize: 24}}> {product.item_name}</div>
                    </a>
                    <div style={{fontSize: 22}}> ${product.item_price} </div>
                </div>
                <div style={{fontSize: 18, width: 700}}> {product.item_description}</div>
                <div style={{marginTop: 20}}>
                    <img src={product.image_url}/> <br/>
                </div>
                <div style={{marginTop: 25}}>
                    <button className="btn btn-secondary" onClick={addToCart}>Add to cart</button><br/>
                </div>
                <br/>
        </div>
        </div>
    )
}

export default Product;