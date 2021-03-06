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
import Account from './pages/Account/Account'
import NotFound from './pages/NotFound/NotFound'

const App = () =>{
  // const [ currentUser, setCurrentUser ] = useState(httpClient.getCurrentUser())

  // const onLoginSuccess = (user) => {
	// 	setCurrentUser(httpClient.getCurrentUser())
	// }

	// const logOut = () =>{
	// 	httpClient.logOut()
	// 	setCurrentUser(null)
	// }

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/Product" exact component={ Products } />
        <Route path="/Account" exact component={ Account } />
        <Route path="/NotFound" exact component={ NotFound } />
        <Redirect to="/NotFound" />
      </Switch>
    </Router>
  );
}

export default App;
