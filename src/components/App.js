import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import '../../public/assets/css/App.css';
import Nav from './layouts/Navbar';
import Footer from './layouts/Footer';
import Portfolio from './Portfolio';
import Header from './Header';
import SearchBar from './abc';
import ABC from './SearchBar';
import Login from './login';
import Dashboard from './dashboard';

const Root = () => {
  console.log('root')
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Dashboard/>
      </PrivateRoute>
      <Route exact path="/login" render={() => <Login/>}/>
    </Switch>
  )
}

const checkAuth = {
  authenticate() {
    let expire = localStorage.getItem('time');
    let now = Date.now();
    console.log('expire', expire, now); 
    if(expire) {
      if(parseInt(expire) > now) {
        console.log('true')
        return true;
      }
    }
    console.log('false')

    return false;
  }
};

function PrivateRoute({ children, ...rest }) {
  console.log('private')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        checkAuth.authenticate() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  
  render() {
    return (
      <Router>
        <Root/>
      </Router>
    )
  }
}

export default App;


