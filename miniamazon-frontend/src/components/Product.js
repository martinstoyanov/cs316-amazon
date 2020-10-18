import React from 'react';

function Product({product}){
    return(
        <div>
            <h2>
                Item name: {product.item_name} <br/>
                Description: {product.item_description} <br/>
                {product.item_image} <br/>
                Price: ${product.item_price} 
                <div>
                    <button className="btn btn-secondary">Add to cart</button><br/>
                </div>
                <br/>
            </h2> 
        </div>
    )
}

export default Product;