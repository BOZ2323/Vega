import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import yummies from './yummies.json'
import Logo from './Logo'
import Menu from './Menu'
import RecipeList from './RecipeList';
import Search from './Search'



// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState([])
  const [query, setQuery] = useState([])
  
  
useEffect(()=>{
  getRecipes();
}, [query])


const getRecipes = async () => {
  const data = await yummies;
  setRecipes(data);
}

const updateSearch = async (e) => {
  await setSearch(e.target.value)
}

const getSearch = async (e) =>{
  e.preventDefault();
  await setQuery(search);
}
const Knopf = ({getRecipes, getSearch, updateSearch}) => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
      <div>
          <input type="submit" value="Knopf" onClick={onClick} />
          { showResults ? <Search getRecipes={getRecipes} getSearch={getSearch} updateSearch={updateSearch}/> : null }
      </div>
  )
}

  return (
    <Router>
      <div className="App">
          <Switch>
            {/* <Route path="/search" component={Search}/> */}
            {/* <Link to="/search" ><button className="search-frontpage-button">search</button></Link> */}
          </Switch>
          <Search getRecipes={getRecipes} getSearch={getSearch} updateSearch={updateSearch}/>
          <Logo />
          
          
          {/* <Search getRecipes={getRecipes} getSearch={getSearch} updateSearch={updateSearch}/> */}
          <Menu />  
          <RecipeList recipes={recipes} query={query}/> 
        
      </div>
    </Router>
  );
}

export default App;
