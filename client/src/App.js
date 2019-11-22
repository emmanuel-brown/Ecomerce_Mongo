import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// components
import NavBar from './Components/NavBar/NavBar'

//pages
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/Product" exact component={ Products } />
        <Redirect to="/NotFound" />
      </Switch>
    </Router>
  );
}

export default App;
