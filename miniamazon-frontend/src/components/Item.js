import React from 'react';
import axios from 'axios';
const serverURL = "http://localhost:8888"

class Items extends React.Component {

    constructor(props) {
        super(props);
        
        var url = window.location.href;
        var parts = url.split("/");
        var id = parts[parts.length - 1];
        this.state = {
            id: id,
            item: {}
        }
    }

    componentDidMount() {
        axios.get(`${serverURL}/item/${this.state.id}`).then((response) => {
            this.setState({item: response.data.data});
            console.log(response.data.data);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        Name: {this.state.item.item_name}
                    </div>
                    <div>
                        Price: {this.state.item.item_price}
                    </div>
                </div>
            </div>
        ); 
    }
}
export default Items;