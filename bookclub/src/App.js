import React, { Component } from 'react';
import { Router } from "@reach/router";
/* import logo from './logo.svg'; */
import Home from './components/Home/Home';
import Books from './components/books/Books';
import Blog from './components/Blog/Blog';
import Login from './components/login/Login';
import Register from './components/register/register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <Books path="books" />
          <Blog path="blog" />
          <Login path="login/account" />
          <Register path="login/newaccount" />
        </Router>
      </div>
    );
  }
}

export default App;
