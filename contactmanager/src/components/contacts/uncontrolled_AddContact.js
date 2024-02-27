// Uncontrolled component
// Where each input is not connected to the state

import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state); // we don't havre state, but values are coming from props
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      photo: this.photoInput.current.values
    }
  }

  static defaultProps = {
    name: "Doby",
    email: "doby@example.com",
    phone: "9821637450"
  } // when working with redux, we get state from redux store and map it to props in the component

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control control-lg" placeholder="Enter name..." name="name" defaultValue={name} ref={this.nameInput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control control-lg" placeholder="Enter email..." name="email" defaultValue={email} ref={this.emailInput} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control control-lg" placeholder="Enter phone..." name="phone" defaultValue={phone} ref={this.phoneInput} />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-success mt-3" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;