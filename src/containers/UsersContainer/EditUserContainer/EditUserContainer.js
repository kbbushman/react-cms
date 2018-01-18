import React, { Component } from 'react';

import axios from 'axios';

class EditUser extends Component {
  state = {
    id: this.props.match.params.id,
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    authId: '',
    dateCreated: '',
    timeCreated: '',
    updated: ''
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    axios.get(`https://reactcms-v1.firebaseio.com/users/${userId}.json/`)
      .then(response => {
        const userData = response.data;
        console.log(userData)
        this.setState({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          role: userData.role,
          authId: userData.authId,
          dateCreated: userData.dateCreated,
          timeCreated: userData.timeCreated,
          updated: userData.updated
        })
      })
      .catch(err => console.log(err));
  }

  onFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  onLastNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onRoleChange = (event) => {
    this.setState({role: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const userId = this.state.id;
    const updatedUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role: this.state.role,
      authId: this.state.authId,
      dateCreated: this.state.dateCreated,
      timeCreated: this.state.timeCreated,
      updated: new Date().toLocaleString()
    }
    axios.put(`https://reactcms-v1.firebaseio.com/users/${userId}.json`, updatedUser)
      .then(response => {
        console.log(response);
        this.props.history.replace('/dashboard/users');
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancelHandler = () => {
    this.props.history.replace('/dashboard/users');
  }

  render() {
    return (
      <div className='container'>
        <h1>Edit User</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='firstName'>Fist Name</label>
            <input id='firstName' className='form-control' type='text' value={this.state.firstName} placeholder='First Name' onChange={(event) => this.onFirstNameChange(event)} />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' className='form-control' type='text' value={this.state.lastName} placeholder='Last Name' onChange={(event) => this.onLastNameChange(event)} />
          </div>
          <div className='form-group'>
            <label htmlFor='role'>Role</label>
            <select id='role' className='form-control' name='role' value={this.state.role} onChange={(event) => this.onRoleChange(event)}>
              <option name='role' value={this.state.role}>{this.state.role}</option>
              <option name='role' value='Subscriber'>Subscriber</option>
              <option name='role' value='Editor'>Editor</option>
              <option name='role' value='Author'>Author</option>
              <option name='role' value='Administrator'>Administrator</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary float-right'>Update User</button>
          <button type='button' className='btn btn-secondary float-right mr-2' onClick={this.onCancelHandler}>Cancel</button>
        </form>
        <input type='text' value={this.state.email} disabled />
      </div>
    );
  }
}

export default EditUser;
