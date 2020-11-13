import React from 'react';
import axios from 'axios';
import Product from './Product';

const serverURL = "http://localhost:8888"

export default class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            product1: [],
            product2: [],
            product3: []
        };
    }

    componentDidMount() {
        console.log(this.state.category)
        axios.get(`${serverURL}/item/${this.state.category.item1_id}`).then(response => {
            let item1 = response.data.data
            this.setState({product1: response.data.data})
        })

        axios.get(`${serverURL}/item/${this.state.category.item2_id}`).then(response => {
            let item1 = response.data.data
            this.setState({product2: response.data.data})
        })

        axios.get(`${serverURL}/item/${this.state.category.item3_id}`).then(response => {
            let item1 = response.data.data
            this.setState({product3: response.data.data})
        })
    }

    render() {
        return(
            <div>
                <h4>
                    Category: <b>{this.state.category.name}</b>
                    {/* <Product key={this.state.category.item1_id} product ={this.state.product1}></Product>
                    <Product key={this.state.category.item2_id} product ={this.state.product2}></Product>
                    <Product key={this.state.category.item3_id} product ={this.state.product3}></Product> */}
                </h4><br/>
            </div> 
        )
    }
}