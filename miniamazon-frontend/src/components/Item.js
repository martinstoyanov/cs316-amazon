import React from 'react';

class Items extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.items);
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        Name: {item.name}
                    </div>
                    <div>
                        Price: {item.price}
                    </div>
                </div>
            </div>
        ); 
    }
}
export default SearchResults;