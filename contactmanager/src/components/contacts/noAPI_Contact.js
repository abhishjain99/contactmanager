import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './contact.css'; // external css style sheet, overrides everything

class Contact extends Component {
  // Expected prop type, gives warning if given wrong prop type / Type validation
  // // inside Class
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  // state = {}

  // constructor() {
  //   super();
  //   this.state = {}

  //   this.onShowClick = this.onShowClick.bind(this);
  // }

  // onShowClick() {
  //   console.log(this.state); // this does not work here as intended because this is our own custom function and not Component's own core method. So we need to bind our onClick function.
  //   // Another way of doing this is to write a constructor and bind this function in there.

  // // ***** The best way? Use arrow function. It will make this available for us. :)
  // }

  // state = {}
  // onShowClick = (name, e) => {
  //   // console.log(this.state);
  //   // console.log(e.target);
  //   console.log(name);
  // }

  state = { showContactInfo : false }

  // onShowClick = e => {};
  onShowClick = e => {
    // this.state = { showContactInfo : true } // we cannot do this. We need to use setState().
    this.setState({ showContactInfo : !this.state.showContactInfo });
    // If we have component based stat and we want to change it, use setstate().
    // We can also just use this function inline.
  }

  onDeleteClick = e => {
    this.props.deleteClickHandler();
  }

  render(props) {
    // const { email, phone } = this.props; // destructuring
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    // const { name, email, phone } = this.props.contact; // Can do like this too and not use contact.name
    return (
      <div className="card card-body mb-3">
        {/* <h4>{this.props.name}</h4> */} {/* direct use with this.props */}
        {/* <ul className='list-group'>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul> */}
        {/* <h4>{contact.name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h4> */} {/* This does not work because we need to bind this to the custom function to Component */}
        {/* <h4>{contact.name} <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down"></i></h4> */}
        {/* <h4>{contact.name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h4> */}

        <h4>
          {contact.name} <i onClick={this.onShowClick.bind(this, contact.name)} className="fas fa-sort-down" style={{cursor: "pointer"}}></i> {/* .bind is used to pass parameters to the function. Be it arrow or not - 'this' is compulsory. */}
          <i onClick={this.onDeleteClick.bind(this)} className="fas fa-times" style={{ cursor: "pointer", float: "right", color: "red" }} />
        </h4>

        { showContactInfo ? (
          <ul className='list-group'>
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Phone: {contact.phone}</li>
          </ul>
        ) : null }
      </div>
    )
  }
}

// Expected prop type, gives warning if given wrong prop type / Type validation
// // outside Class
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired // this is function in "Contacts" and is called in the "onDeleteClick" function which is called in "onClick" function.
};

export default Contact;