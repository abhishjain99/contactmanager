// This one implements Context API. So if you want to use this, ake sure you remane it to Contact.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = { showContactInfo : false }

  onShowClick = e => {
    this.setState({ showContactInfo : !this.state.showContactInfo });
  }

  onDeleteClick = e => {
    this.props.deleteClickHandler();
  }

  render(props) {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
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

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired // this is function in "Contacts" and is called in the "onDeleteClick" function which is called in "onClick" function.
};

export default Contact;