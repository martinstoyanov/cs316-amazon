import React, { Component } from 'react'
import Name from './Name'

class SearchContainer extends Component {
  render() {
    console.log("rendering");
  if (this.props.names) {
    
      return (
          <div>
              {this.props.names.map(name => <Name name = {name}/>)}
          </div>
      )
    }
      console.log("empty string");
      return "";
  }
}

  export default SearchContainer
