import React from 'react';
import SellerDelete from './SellerDelete';



function SellerProduct({product}){    
     
    return(
        <div>
            <div className= "product-border" style={{marginBottom: 40}}>
            <div>
                <div style={{display: 'flex', width: 600, justifyContent: 'space-between'}}>
                    <a href={"/items/" + product._id}>
                        <div className="blue-font" style={{fontSize: 24}}> <b>{product.item_name}</b></div>
                    </a>
                    <div style={{fontSize: 22}}> <b>${product.item_price}</b></div>
                </div>
                <div style={{fontSize: 18, width: 700}}> {product.item_description}</div>
                <div style={{marginTop: 20}}>
                    <img src={product.image_url}/> <br/>
                </div>
            </div>
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
            </div>
                
        </div>
    )
}

export default SellerProduct;