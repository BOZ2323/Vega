import React, { useState } from "react";

const SearchButton = ({ getRecipes, getSearchResults, updateSearch }) => {
  const [showResults, setShowResults] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const onClick = () => setShowResults(true) && setShowButton(false);
  return (
    <div>
      {showButton === true ?(<div>
        <input className="search-frontpage-button" type="submit" value="Search" onClick={onClick} />
      </div>
      ) : null}
      
      {showResults === true ? (
        <div className="searchBackground">
          <form onSubmit={getRecipes && getSearchResults} className="search-form">
            <input className="search-bar" type="text" placeholder="vegetable..." onChange={updateSearch}></input>
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </div>
      ) : null}
      
    </div>
  );
};

export default SearchButton;
