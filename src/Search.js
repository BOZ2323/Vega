import React, { useState } from 'react'



const Search = ({getRecipes, getSearch, updateSearch}) => {
    const [showResults, setShowResults] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const onClick = () => setShowResults(true)
    return (
        <div>
            <div>
            <input className="search-frontpage-button" type="submit" value="Search" onClick={onClick} />
            </div>
            { showResults === true ? (
                <div className="searchFieldBackground">
            <form onSubmit={getRecipes && getSearch} className="search-form">
                <input className="search-bar" type="text" placeholder="vegetable..." onChange={updateSearch}></input>
                <button className="search-button" type="submit">Search</button>
            </form> 
        </div> 
            ) : null }
        </div>
    )
}

  export default Search;