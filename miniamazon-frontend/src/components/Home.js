import React from 'react';

export default class Home extends React.Component{

    constructor(props) {
        super(props);
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
                        <button className="btn btn-secondary">Shop Now!</button><br/>
                    </a>
                </div>
            </nav>
        )
    }
}