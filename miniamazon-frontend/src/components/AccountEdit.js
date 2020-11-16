import React from 'react';
import '../App.css';

function AccountEdit(){

    var userID = "compsci316project";
    var userName = "john appleseed";
    var userEmail = "john_appleseed123@gmail.com";
    var userPassword = "goduke123";
    var accountType = "Buyer";

    function setUserName(event) {
        userName = event.target.value;
    }
    function setUserEmail(event) {
        userEmail = event.target.value;
    }
    function setUserPassword(event) {
        userPassword = event.target.value;
    }

    return(
        <nav className="left-layout">
            <div>
                <h1 className="yellow-font"><b>Edit My Account</b></h1><br/>
                {/* <h4>User ID: </h4> */}
                <tr>
                    <td><p className = "label"><b>Name:</b></p></td>
                    <td><input type = "text" className = "set-user-name" value = {userName} onChange = {setUserName}/></td>
                </tr>
                <tr>
                    <td><p className = "label"><b>Email:</b></p></td>
                    <td><input type = "text" className = "set-user-email" value = {userEmail} onChange = {setUserEmail}/></td>
                </tr>
                <tr>
                    <td><p className = "label"><b>Password:</b></p></td>
                    <td><input type = "text" className = "set-user-password" value = {userPassword} onChange = {setUserPassword}/></td>
                </tr>
                {/* <h4>Account Type: {accountType}</h4> */}
            </div><br/>
            <div>
                <a href="/account">
                    <button className="button button1">Save</button><br/>
                </a>
                <br/>
                <a href="/account">
                    <button className="btn btn-danger">SIGN OUT</button>
                </a>
            </div>   
        </nav>
    )
}

export default AccountEdit;