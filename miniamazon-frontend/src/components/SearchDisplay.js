// make new class for this and import
// child component for search results 
import React from 'react'
function SearchDisplay(props){
  const {searchResults} = props
  return (
    <div>
    {searchResults.map( (text, i) => (
          <h1 key = {"" + i}> {text}</h1>
          )) 
    }
    </div>
    )
}
export default SearchDisplay;