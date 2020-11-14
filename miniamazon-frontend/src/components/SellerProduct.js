import React from 'react';
import SellerDelete from './SellerDelete';



function SellerProduct({product}){    
     
    return(
        <div>
            <h2>
                Item name: {product.item_name} <br/>
                Description: {product.item_description} <br/>
                {product.item_image} <br/>
                Price: ${product.item_price} 
                <br/>
                <a href= {"/account/seller/edit/"+ product._id}>
                    <button className="btn btn-secondary">Edit This Product</button>
                    {/*the href should include product id & sellerid to avoid an overlap
                    /account/seller/edit/pid/sid */}
                    
                        
                    <br/>
                </a>
                <a href= {"/account/seller/delete/"+ product._id}>
                    <button className="btn btn-secondary"> Delete This Product</button>
                    <br/>
                </a>
                
            </h2> 
        </div>
    )
}

export default SellerProduct;