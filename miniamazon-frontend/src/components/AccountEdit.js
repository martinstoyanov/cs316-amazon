import React from 'react';
import '../App.css';

function AccountEdit(){

    var userID;
    var userName;
    var userEmail;
    var userPassword;
    var accountType;

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
            <div className="personal-info">
                <h1>Edit My Account</h1>
                <h4>User ID: </h4>
                <tr>
                    <td>
                        <p className = "label">Name:</p>
                    </td>
                    <td>
                        <input type = "text" className = "set-user-name" value = {userName} onChange = {setUserName}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className = "label">Email:</p>
                    </td>
                    <td>
                        <input type = "text" className = "set-user-email" value = {userEmail} onChange = {setUserEmail}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className = "label">Password:</p>
                    </td>
                    <td>
                        <input type = "text" className = "set-user-password" value = {userPassword} onChange = {setUserPassword}/>
                    </td>
                </tr>
                <h4>Account Type: </h4>
            </div> <br/>


            <div>
                <a href="/account">
                    <button className="btn btn-secondary">Save</button><br/>
                </a>
                <br/>
                <a href="/home">
                    <button className="btn btn-danger">SIGN OUT</button>
                </a>
            </div>   
        </nav>
    )
}

export default AccountEdit;