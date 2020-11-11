import React from 'react';

function PostCheckout(){
    return(
        <nav className="left-layout">
            <h1 className="title">Thanks for your order!</h1>
            <p>
                You can check the status of your order below
            </p>
            <div>
                <a href="/orders">
                    <button className="btn btn-secondary">My Orders</button><br/>
                </a>
            </div>

        </nav>
    )
}

export default PostCheckout;