import React, { Component } from 'react';

import '../../public/assets/css/App.css';
import Nav from './layouts/Navbar';
import Footer from './layouts/Footer';
import Portfolio from './Portfolio';
import Header from './Header';
import SearchBar from './abc';
import ABC from './SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
      <Header/>
      
      <Portfolio />
      <Footer />
      
      </div>

      
    );
  }
}

export default App;


