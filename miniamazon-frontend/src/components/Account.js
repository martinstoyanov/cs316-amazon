import React from 'react';
import '../App.css';



function Account(){
    
    var userID = "compsci316project";
    var userName = "john appleseed";
    var userEmail = "john_appleseed123@gmail.com";
    var userPassword = "goduke123";
    var accountType = "Seller";

    function displayMyProducts(){
        if (accountType == "Seller")
        {
            return(
            <div>
                <br/>
                <a href="/account/seller/products">
                    <button className="btn btn-secondary">View/Edit My Products</button><br/>
                </a>
            </div>
            )
        }
        else
        {
            return (<div></div>)
        }
    }

    return(
        <nav className="left-layout">
            <div className="personal-info">
                <h1>My Account</h1>
                <h4>User ID: <var>{userID}</var></h4>
                <h4>Name: <var>{userName}</var></h4>
                <h4>Email: <var>{userEmail}</var></h4>
                <h4>Password: <var>{userPassword}</var></h4>
                <h4>Account Type: <var>{accountType}</var></h4>
            </div><br/>
            <div>
                <a href="/orders">
                    <button className="btn btn-secondary">My Orders</button>
                </a>
                
                {displayMyProducts()}
            </div><br/>
            <div>
                <a href="/account-edit">
                    <button className="btn btn-secondary">Edit My Information</button><br/>
                </a>
                <br/>
                <a href="/home">
                    <button className="btn btn-danger">SIGN OUT</button>
                </a>
            </div>   
        </nav>
    )
}

export default Account;