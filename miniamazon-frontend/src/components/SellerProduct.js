import React from 'react';
import SellerDelete from './SellerDelete';



function SellerProduct({product}){    
     
    return(
        <div>
            <p className= "product-border" >
                Item name: {product.item_name} <br/>
                Description: {product.item_description} <br/>
                {product.item_image} <br/>
                Price: ${product.item_price} 
                <br/>
                <a href= {"/account/seller/edit/"+ product._id}>
                    <button className="button button1">Edit This Product</button>
                    {/*the href should include product id & sellerid to avoid an overlap
                    /account/seller/edit/pid/sid */}
                    
                        
                    <br/>
                </a>
                <a href= {"/account/seller/delete/"+ product._id}>
                    <button className="btn btn-danger"> Delete This Product</button>
                    <br/>
                </a>
                
            </p> 
        </div>
    )
}

export default SellerProduct;