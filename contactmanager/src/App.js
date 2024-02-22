import React, { Component } from 'react';
import './App.css';
// import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          {/* <Contact name="Abby" email="abby@example.com" phone="9876543210"/>
          <Contact name="Bobby" email="bobby@example.com" phone="9786543120"/> */}
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;