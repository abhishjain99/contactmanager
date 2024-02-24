// Holds a application level state. It has a Provider which holds a variable "value" which holds entire state or pieces of state.
// Wrap main application (App.js) in provider to have its access.
// Any component we want to use context with, we import Consumer in it.
// Then we return Consumer tag in the children component we are using it in, which contains value given from Provider.

import React, { Component } from 'react';
const Context = React.createContext();

// It's a store or provider.
// Provider : It will have all the states and actions/methods/functions that consumer needs to use globally throughout the application.
export class Provider extends Component { // This is our global state
  state = {
    contacts: [
      { id: 1, name: "Abby", email:"abby@example.com", phone: "9876543210" },
      { id: 2, name: "Boby", email:"boby@example.com", phone: "1234567890" },
      { id: 3, name: "Coby", email:"coby@example.com", phone: "9865324106" }
    ]
  }


  render() {
    return (
      // pass in anaything that we want to have throughout th application can be put in this "value"
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

// Consumer : we use consumer in any component we want to access the state from.
export const Consumer = Context.Consumer;