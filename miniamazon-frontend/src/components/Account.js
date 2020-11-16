import React from 'react';
import '../App.css';
import axios from 'axios';

var userID = "compsci316project";
var userName = "john appleseed";
var userEmail = "john_appleseed123@gmail.com";
var userPassword = "goduke123";
var accountType = "Buyer";

const serverURL = "http://localhost:8888"
//const userId = "5f8b8eee77a1ab596021f8c4"
const userId = "5fac34d597cfaed9d08608a3"

export default class Account extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isSeller: true
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
            <div >
                
              <a className= ".button1:hover " href="/account/seller/products">
              
                    <button className="button button2">View/Edit My Products</button><br/>
                </a> <br/>
                <a href="/sold-items">
                    <button className="button button2">Sold Items</button><br/>
                </a><br/>
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
                {sellerHistory}
                <div>
                    <a className= ".button1:hover " href="/orders">
                        <button class="button button1">My Orders</button>
                    </a><br/><br/>
                    <a href="/reviews">
                        <button className="button button1">My Reviews</button><br/>
                    </a>
                </div><br/>
                <div>
                    <a className= ".button1:hover " href="/balance">
                        <button className="button button1">Balance</button><br/>
                    </a>
                </div><br />
                <div>
                    <a className= ".button1:hover " href="/account-edit">
                        <button className="button button1">Edit My Information</button><br/>
                    </a>
                    <br/>
                    <a className= ".button1:hover " href="/home">
                        <button className="btn btn-danger">SIGN OUT</button>
                    </a>
                </div>   
            </nav>
        )
    }
}