import React from 'react';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.items);
    }

    render() {
        return (
            <div>
                {this.props.items && this.props.items.map(item => 
                    <div>
                        <div>
                            Name: {item.name}
                        </div>
                        <div>
                            Price: {item.price}
                        </div>
                    </div>
                )}
            </div>
        ); 
    }
}
export default SearchResults;