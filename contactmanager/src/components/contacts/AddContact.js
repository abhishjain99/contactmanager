import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => this.setState({
    [e.target.name]: e.target.value
  });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    
    const { name, email, phone } = this.state;
    const newContact = { id: uuid(), name, email, phone }; // key and value are same, so using ES6 syntax
    // npm install uuid
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState( { name: '', email: '', phone: '' }) // clear state after subimitting
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup placeholder="Enter name..." label="name" name="name" value={name} type="text" onChange={this.onChange}  />
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control control-lg" placeholder="Enter name..." name="name" value={name} onChange={this.onChange} />
                  </div> */}
                  <TextInputGroup placeholder="Enter email..." label="email" name="email" value={email} type="email" onChange={this.onChange}  />
                  {/* <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control control-lg" placeholder="Enter email..." name="email" value={email} onChange={this.onChange} />
                  </div> */}
                  <TextInputGroup placeholder="Enter phone..." label="phone" name="phone" value={phone} onChange={this.onChange}  />
                  {/* <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control control-lg" placeholder="Enter phone..." name="phone" value={phone} onChange={this.onChange} />
                  </div> */}
                  <input type="submit" value="Add Contact" className="btn btn-block btn-success mt-3" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;