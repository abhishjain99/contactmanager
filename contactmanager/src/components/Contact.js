import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './contact.css'; // external css style sheet, overrides everything

class Contact extends Component {
  // Expected prop type, gives warning if given wrong prop type / Type validation
  // inside Class
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render(props) {
    const { email, phone } = this.props; // destructuring
    return (
      <div className="card card-body mb-3">
        <h4>{this.props.name}</h4> {/* direct use with this.props */}
        <ul className='list-group'>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

// Expected prop type, gives warning if given wrong prop type / Type validation
// outside Class
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;