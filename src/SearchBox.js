import React from 'react';

const  SearchBox = (props) => {  
  return (
    <div className="tc pa2">
      <input className="pa2"
             type="search"
             placeholder="Search..."
             onChange={props.onSearchChange}
      />
    </div>
  )
}

export default SearchBox
