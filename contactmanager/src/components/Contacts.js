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
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        { contacts.map(contact => (
          // <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    )
  }
}

export default Contacts