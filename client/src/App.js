import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

//pages
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/products" exact component={ Products } />
        <Redirect to="/NotFound" />
      </Switch>
    </Router>
  );
}

export default App;
