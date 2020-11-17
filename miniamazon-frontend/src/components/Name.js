import React, { Component } from 'react'
import { Linking, Text } from 'react';

const serverURL = "http://localhost:8888"

class Name extends Component {
    render() {
        var str1 = "/items/" + this.props.name;
        return (
            <div>
                <h3>Search Results: </h3>
                <a href={""+str1}>
                    <button className="btn btn-secondary">Click Here</button><br/>
                </a>
            </div>
        )
    }
}

export default Name