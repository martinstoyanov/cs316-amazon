import React from 'react';
import ProductHistory from './ProductHistory';
import axios from 'axios';

const serverURL = "https://miniamazon-sp9m9.ondigitalocean.app"
//const userId = "5f8b8eee77a1ab596021f8c4"
const userId = localStorage.getItem('token')


export default class SoldList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            seller: {},
            items: []
        }
    }

    componentDidMount() {
        axios.get(`${serverURL}/seller/${userId}`).then((response) => {
            this.setState({seller: response.data.data})
            let p = []

            this.state.seller.items_sold.forEach(item => {
                axios.get(`${serverURL}/item/${item[0]}`).then((i) => {
                    let product_history = i.data.data
                    product_history.count = item[1]
                    product_history.order_date = item[2]
                    p.push(product_history)
                    this.setState({items: p})
                })
            })
        }).catch((err) => {
            alert("You have sold no items")
        })
    }

    render() {
        return(
            <nav className="left-layout">
                <h1 className="yellow-font"><b>Items Sold</b></h1><br/>
                <div>
                    {this.state.items.map(product => <ProductHistory key={product._id} product ={product} ></ProductHistory>)}
                </div>
            </nav>
        )   
    }
}