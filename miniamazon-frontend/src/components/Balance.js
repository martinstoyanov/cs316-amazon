import React from 'react';
import axios from 'axios';
import NumericInput from 'react-numeric';

const serverURL = "http://localhost:8888"
const userId = "5f8b8eee77a1ab596021f8c4"

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
            <h1 className="title">Balance</h1>
            <h2>
                ${this.state.user.balance.toFixed(2)}
            </h2>
            <div style={{marginTop: 100}}>
                 <p>
                    Add balance amount:
                </p>
                {/*<NumericInput step={0.01} precision={2} initValue={this.state.balance} value={this.state.balance} onChange={this.updateBalance}/>*/}
                <input type = "number" min="0.01" step="0.01" max="2500" value={this.state.balance} onChange={this.updateBalance}/><br /><br />
                <button className="btn btn-secondary" onClick={this.addBalance}>Add</button>
            </div>

        </nav>
    )
}
}