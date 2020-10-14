import React from 'react';
import Product from './Product';

function ProductsList(){
    const products = [
        {
            itemID: 1,
            itemName: "item 1",
            itemImage: "something",
            itemDescription: "This is a cool product #1",
            itemPrice: 12
        },
        {
            itemID: 2,
            itemName: "item 2",
            itemImage: "something",
            itemDescription: "This is a cool product #2",
            itemPrice: 12
        },
        {
            itemID: 3,
            itemName: "item 3",
            itemImage: "something",
            itemDescription: "This is a cool product #3",
            itemPrice: 12
        },
        {
            itemID: 4,
            itemName: "item 4",
            itemImage: "something",
            itemDescription: "This is a cool product #4",
            itemPrice: 12
        },
        {
            itemID: 5,
            itemName: "item 5",
            itemImage: "something",
            itemDescription: "This is a cool product #5",
            itemPrice: 12
        },
        {
            itemID: 6,
            itemName: "item 6",
            itemImage: "something",
            itemDescription: "This is a cool product #6",
            itemPrice: 12
        }
    ]
    const productList = products.map(product => 
        <Product product ={product}></Product>
    )

    return(
        <nav className="left-layout">
            <h1 className="title">PRODUCTS</h1>
            <p>
                Here are the products we have.
            </p>
            <div>
                {productList}
            </div>
            
        </nav>
    )
}

export default ProductsList;