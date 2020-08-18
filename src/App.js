import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import yummies from "./yummies.json";
import Logo from "./Logo";
import Menu from "./Menu";
import RecipeList from "./RecipeList";
import SearchButton from "./Searchbutton";
import ShowIngrediants from "./components/RecipeDetails/ShowIngrediants";
import ShowIntro from "./components/RecipeDetails/ShowIntro";
import ShowMethod from "./components/RecipeDetails/ShowMethod";

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await yummies;
    setRecipes(data);
  };

  const updateSearch = async (e) => {
    await setQuery(e.target.value);
    console.log("query", query);
  };

  const filteredButtonResults = async (e) => {
    await setFilter(e.target.value);
    console.log("filter", filter);
    console.log("e.target", e.target.value);
  };


  return (
    <Router>
      <div className="app">
        <Switch>
         
          <Route path="/ingrediants" exact component={ShowIngrediants}/>
          <Route path="/intro" exact component={ShowIntro}/>
          <Route path="/method" exact component={ShowMethod}/>
          {/* <Link to="/query" ><button className="query-frontpage-button">query</button></Link> */}
        </Switch>
        <SearchButton updateSearch={updateSearch} />
        <Logo />
        <Menu recipes={recipes} filteredButtonResults={filteredButtonResults} filter={filter} />
        <RecipeList recipes={recipes} query={query} />
      </div>
    </Router>
  );
};

export default App;
