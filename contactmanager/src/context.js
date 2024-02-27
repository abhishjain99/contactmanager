// Holds a application level state. It has a Provider which holds a variable "value" which holds entire state or pieces of state.
// Wrap main application (App.js) in provider to have its access.
// Any component we want to use context with, we import Consumer in it.
// Then we return Consumer tag in the children component we are using it in, which contains value given from Provider.

import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  // action is what action I want to take when I call something. Example delete. And we need to get what "type" we need to use.
  switch(action.type) { // type is just Capitalized string
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id != action.payload) // payload is the data sent along with action. For example, id or conatact or anything.
      }
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

// It's a store or provider.
// Provider : It will have all the states and actions/methods/functions that consumer needs to use globally throughout the application.
export class Provider extends Component { // This is our global state
  state = {
    contacts: [
      { id: 1, name: "Abby", email:"abby@example.com", phone: "9876543210" },
      { id: 2, name: "Boby", email:"boby@example.com", phone: "1234567890" },
      { id: 3, name: "Coby", email:"coby@example.com", phone: "9865324106" }
    ],
    dispatch: action => { // this is a way to call an action. One can use dispatch anywhere now.
      this.setState(state => reducer(state, action));
    }
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