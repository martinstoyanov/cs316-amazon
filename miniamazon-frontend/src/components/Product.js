import React from 'react';

function Product({product}){
    return(
        <div>
            <h2>
                Item name: {product.itemName} <br/>
                Description: {product.itemDescription} <br/>
                {product.itemImage} <br/>
                Price: ${product.itemPrice} 
                <div>
                    <button className="btn btn-secondary">Add to cart</button><br/>
                </div>
                <br/>
            </h2> 
        </div>
    )
}

export default Product;