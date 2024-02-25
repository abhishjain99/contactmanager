// This one implements Context API. So if you want to use this, ake sure you remane it to Contact.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo : false
  }

  onShowClick = e => {
    this.setState({
      showContactInfo : !this.state.showContactInfo
    });
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({type: "DELETE_CONTACT", payload: id})
  }
  // dispatch is an action from Consumer which is passed in the context.js in Provider which then calls the reducer function which has switch cases for various actions.

  render(props) {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {/* Consumer here has a function with value parameter. Depending on the action "dispatch" passed, it does the work. */}
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name} <i onClick={this.onShowClick.bind(this, contact.name)} className="fas fa-sort-down" style={{cursor: "pointer"}}></i> {/* .bind is used to pass parameters to the function. Be it arrow or not - 'this' is compulsory. */}
                <i onClick={this.onDeleteClick.bind(this, contact.id, dispatch)} className="fas fa-times" style={{ cursor: "pointer", float: "right", color: "red" }} />
              </h4>
      
              { showContactInfo ? (
                <ul className='list-group'>
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null }
            </div>
          );
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;