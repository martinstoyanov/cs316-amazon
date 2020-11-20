import React from 'react';
import axios from 'axios';
import NumericInput from 'react-numeric';

const serverURL = "https://miniamazon-sp9m9.ondigitalocean.app"
const userId = localStorage.getItem('token')

export default class Balance extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {balance: 0.0},
            balance: 0.0
        };
    }
    
componentDidMount() {
    axios.get(`${serverURL}/user/${userId}`).then((res) => {
        console.log(res.data.data)
        this.setState({user: res.data.data})
    });
}

updateBalance = (e) => {
    this.setState({ balance: e.target.value })
}

addBalance = () => {
    let u = this.state.user
    u.balance += Number(this.state.balance)

    axios.put(`${serverURL}/user/${userId}`, u).then(response => {
        if (response.status === 200) {
            alert('Balance added!')
            window.location.reload(false);
        }
        else {
            alert('An error occured')
        }
    })
}

render() {
    return(
        <nav className="left-layout">
            <h1 className="yellow-font"><b>Balance</b></h1><br/>
            <h3>
                Your Current Balance: <b>${this.state.user.balance.toFixed(2)}</b> 
            </h3>
            <div style={{marginTop: 100}}>
                 <h3 className="blue-font">
                    <b>Add balance amount:</b>
                </h3>
                {/*<NumericInput step={0.01} precision={2} initValue={this.state.balance} value={this.state.balance} onChange={this.updateBalance}/>*/}
                <input type = "number" min="0.01" step="0.01" max="2500" value={this.state.balance} onChange={this.updateBalance}/><br/><br/>
                <button className="button button1" onClick={this.addBalance}>Add</button>
            </div>

        </nav>
    )
}
}