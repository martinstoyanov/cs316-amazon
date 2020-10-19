import React from 'react';

function ProductCart({product}){    
    return(
        <div>
            <h2>
                Item name: {product.item_name} <br/>
                Description: {product.item_description} <br/>
                {product.item_image} <br/>
                Price: ${product.item_price} 
                <br/>
            </h2> 
        </div>
    )
}

export default ProductCart;