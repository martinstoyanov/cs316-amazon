import React, { Component } from 'react'
import { Linking, Text } from 'react';

const serverURL = "http://localhost:8888"

class Name extends Component {
    render() {
        var str1 = "/items/" + this.props.name[0];
        var str2 = this.props.name[1];
        console.log(this.props);
        return (
            <div>
                <h3></h3>
                <a href={""+str1}>
                    <button className="btn btn-secondary">{str2}</button><br/>
                </a>
            </div>
        )
    }
}

export default Name