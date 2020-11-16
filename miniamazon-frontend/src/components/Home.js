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
                <h1 className="yellow-font"><b>Kamazon</b></h1><br/>
                <h3 className="blue-font">
                    Welcome to our website! Click the button below to shop for thousands of products! :)
                </h3><br/>
                <div>
                    <a href="/shop">

                        <button className="button button3">Shop Now!</button><br/><br/><br/>
                    </a>
                </div<br/>
                <div id="recommended-items">
                    <h3 className="blue-font">
                        <b>Your Recommended Items</b>
                    </h3>
                    {this.state.categories.map(category => <Category key={category._id} category ={category}> </Category>)}
                </div>
            </nav>
        )
    }
}