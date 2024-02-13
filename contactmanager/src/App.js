import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact naame="Abby" email="abby@example.com" phone="9876543210"/>
        <Contact naame="Bobby" email="bobby@example.com" phone="9786543120"/>
      </div>
    );
  }
}

export default App;