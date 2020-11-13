import React from 'react';
import '../App.css';
import axios from 'axios';

const serverURL = "http://localhost:8888"
//const userId = "5f8b8eee77a1ab596021f8c4"
const userId = "5fac34d597cfaed9d08608a3"

export default class Account extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isSeller: false
        }
    }

    componentDidMount() {
        axios.get(`${serverURL}/seller/${userId}`).then((res) => {
            if (res.status === 200) {
                this.setState({isSeller: true})
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    
    render() {
        let sellerHistory
        if (this.state.isSeller) {
            sellerHistory = 
            <div>
              <a href="/account/seller/products">
                    <button className="btn btn-secondary">View/Edit My Products</button><br/>
                </a> <br/>
                <a href="/sold-items">
                    <button className="btn btn-secondary">Sold Items</button><br/>
                </a><br />
            </div>
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
              {displayMyProducts}
                    <a href="/orders">
                        <button className="btn btn-secondary">My Orders</button>
                    </a><br/><br/>
                    <a href="/reviews">
                        <button className="btn btn-secondary">My Reviews</button><br/>
                    </a>
                </div><br/>
                <div>
                    <a href="/balance">
                        <button className="btn btn-secondary">Balance</button><br/>
                    </a>
                </div><br />
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
}