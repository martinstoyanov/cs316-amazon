import React from 'react';

function Home(){
    return(
        <nav className="left-layout">
            <h1 className="title">Mini-Amazon</h1>
            <p>
                Welcome to our website!
            </p>
            <div>
                <a href="/productslist">
                    <button className="btn btn-secondary">Shop Now!</button><br/>
                </a>
            </div>

        </nav>
    )
}

export default Home;