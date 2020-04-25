import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeForm from './recipe_form';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import AppShow from './show_recipe';
import { render } from '@testing-library/react';
import Recipe from './indy_recipe';
import { object } from '../../../../Library/Caches/typescript/3.4.5/node_modules/@types/prop-types';

function App() {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/recipes" >
            <Recipes />
            <AppShow />
          </Route>
          <Route exact path="/">
            <Home />
            <RecipeForm />
          </Route>
          <Route path="/recipes/1">
            <Recipe Recipe_name={object.Recipe_name}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
    return <h2>Make a Recipe</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Recipes() {
  return <h2>Family Recipes</h2>;
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

export default App;
