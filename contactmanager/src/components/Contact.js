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

  onShowClick = e => {};

  render(props) {
    // const { email, phone } = this.props; // destructuring
    const { contact } = this.props;
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
        <h4>{contact.name} <i onClick={this.onShowClick.bind(this, contact.name)} className="fas fa-sort-down"></i></h4> {/* .bind is used to pass parameters to the function. Be it arrow or not - 'this' is compulsory. */}
        <ul className='list-group'>
          <li className="list-group-item">Email: {contact.email}</li>
          <li className="list-group-item">Phone: {contact.phone}</li>
        </ul>
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
  contact: PropTypes.object.isRequired
};

export default Contact;