import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

    const {searchTerm, handleInput} = props

    return (
        <div className="searchBox">
            <input type="text" value={searchTerm} onChange={handleInput} placeholder="Find your teacher..."/>
        </div>
    )
}

export default SearchBox
