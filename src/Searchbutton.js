import React from 'react'
import { Link } from 'react-router-dom'

const SearchButton = () => {
    
    return (
        <div>
            <Link to="/search"><button className="search-frontpage-button">search</button></Link>
        </div>
    )
}
export default SearchButton;