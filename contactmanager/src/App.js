import React, { Component } from 'react';
import './App.css';
// import Contact from './components/Contact';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            {/* <Contact name="Abby" email="abby@example.com" phone="9876543210"/>
            <Contact name="Bobby" email="bobby@example.com" phone="9786543120"/> */}
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;