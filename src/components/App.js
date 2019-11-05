import React, { Component } from 'react';

import '../../public/assets/css/App.css';
import Nav from './layouts/Navbar';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div><Nav />
      <Header/></div>
       

      
    );
  }
}

export default App;
