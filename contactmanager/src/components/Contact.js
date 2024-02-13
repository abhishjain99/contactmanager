import React, { Component } from 'react'

class Contact extends Component {
  render(props) {
    const { email, phone } = this.props; // destructuring
    return (
      <div>
        <h4>{this.props.name}</h4> {/* direct use with this.props */}
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;