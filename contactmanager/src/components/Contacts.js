import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       { id: 1, name: "Abby", email:"abby@example.com", phone: "9876543210" },
  //       { id: 2, name: "Bobby", email:"bobby@example.com", phone: "1234567890" },
  //       { id: 3, name: "Coby", email:"coby@example.com", phone: "9865324106" }
  //     ]
  //   }
  //   // Do it this way if we need to utilize constructor for something else too.
  // }
  state = {
    contacts: [
      { id: 1, name: "Abby", email:"abby@example.com", phone: "9876543210" },
      { id: 2, name: "Boby", email:"boby@example.com", phone: "1234567890" },
      { id: 3, name: "Coby", email:"coby@example.com", phone: "9865324106" }
    ]
  };

  deleteContact = (id) => {
    // this is sent as a prop to "Contact" as "deleteClickHandler" and is called in the "onDeleteClick" function which is called in "onClick" function in "Contact".
    // this gives access to the "state" here to child.

    // What if we have to go to one more level up - that's when contextAPI, Redux and other state mangers come into picture. And make global state.
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id != id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      // <div> // We don't need div here.
      // react6 has a component - FRAGMENT - pseudo element that is not added to the DOM.
      <React.Fragment>
        { contacts.map(contact => (
          // <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
          <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
        ))}
      </React.Fragment>
      // </div>
    )
  }
}

export default Contacts