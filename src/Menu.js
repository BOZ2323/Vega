import React from "react";

const Menu = ({ recipes, query, filtered }) => {
  const onChangeHandler = (e) => {};

  return (
    <div className="navbar">
      <ul>
        <li>
          <a className="active" name="top-rated" onClick={onChangeHandler} href="#top-rated">
            Top rated
          </a>
        </li>
        <li>
          <a className="active" name="recommended" onClick={onChangeHandler} href="#recommended">
            Recommended
          </a>
        </li>
        <li>
          <a className="active" name="quick" onClick={onChangeHandler} href="#quick">
            Quick
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
