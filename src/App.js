import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import yummies from "./yummies.json";
import Logo from "./Logo";
import Menu from "./Menu";
import RecipeList from "./RecipeList";
import SearchButton from "./Searchbutton";

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState([]);
  const [filtered, setFilter] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await yummies;
    setRecipes(data);
  };

  const updateSearch = async (e) => {
    await setSearch(e.target.value);
    console.log("search", search);
  };
  // Next step: Query can be replaced by search, it is superfluent

  const  getSearchResults = async (e) => {
    e.preventDefault();
    await setQuery(search);
  };

  const filteredButtonResults = async (e) => {
    await setFilter(e.target.value);
    console.log("filtered", filtered);
    console.log("e.target", e.target.value);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/search" component={Search}/> */}
          {/* <Link to="/search" ><button className="search-frontpage-button">search</button></Link> */}
        </Switch>
        <SearchButton getRecipes={getRecipes} getSearchResults={getSearchResults}  updateSearch={updateSearch} />
        <Logo />

        {/* <Search getRecipes={getRecipes} =getSearchResults {}getSearchResults  updateSearch={updateSearch}/> */}
        <Menu recipes={recipes} filteredButtonResults={filteredButtonResults} filtered={filtered} query={query} />
        <RecipeList recipes={recipes} search={search} />
      </div>
    </Router>
  );
};

export default App;
