import React from 'react';

function PostCheckout(){
    return(
        <nav className="left-layout">
            <h1 className="yellow-font"><b>Thanks for your order!</b></h1>
            <h4>
                You can check the status of your order below.
            </h4>
            <div>
                <a href="/orders">
                    <button className="button button1">My Orders</button><br/>
                </a>
            </div>

        </nav>
    )
}

export default PostCheckout;