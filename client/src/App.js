import React, { useState } from 'react';
import './App.scss';
import httpClient from './httpClient'

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
import Account from './pages/Account/Account'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const [ currentUser, setCurrentUser ] = useState(httpClient.getCurrentUser())

  const onLoginSuccess = (user) => {
		setCurrentUser(httpClient.getCurrentUser())
	}

	const logOut = () =>{
		httpClient.logOut()
		setCurrentUser(null)
	}

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/Product" exact component={ Products } />
        <Route path="/Account" exact component={ Account } />
        <Redirect to="/NotFound" />
      </Switch>
    </Router>
  );
}

export default App;
