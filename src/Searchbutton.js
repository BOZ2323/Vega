import React, { useState } from "react";

const SearchButton = ({ updateSearch }) => {
  const [showSearchField, setShowSearchField] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const switchToBigSearchField = () => {
    setShowSearchField(true);
    setShowButton(false);
  };

  return (
    <div>
      {showButton ? (
        <div>
          <input className="search-frontpage-button" type="submit" value="Search" onClick={switchToBigSearchField} />
        </div>
      ) : null}

      {showSearchField ? (
        <div className="searchBackground">
          <form className="search-form">
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
