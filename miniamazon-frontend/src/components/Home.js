import React from 'react';
import axios from 'axios';
import Category from './Category';


const serverURL = "http://localhost:8888"

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        let c = []
        axios.get(`${serverURL}/categories`).then((response) => {
            let categories = response.data.data
            categories.forEach(category => {
                c.push(category)     
            })
            this.setState({categories: response.data.data})
        });
    }

    render() {
        return(
            <nav className="left-layout">
                <h1 className="title">Mini-Amazon</h1>
                <p>
                    Welcome to our website!
                </p>
                <div>
                    <a href="/shop">
                        <button className="btn btn-secondary">Shop Now!</button><br/><br/><br/>
                    </a>
                </div>
                <div id="recommended-items">
                    <h4>
                        Your Recommended Items:<br/><br/>
                    </h4>
                    {this.state.categories.map(category => <Category key={category._id} category ={category}></Category>)}
                </div>
            </nav>
        )
    }
}