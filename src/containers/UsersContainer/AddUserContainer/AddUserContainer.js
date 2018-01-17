import React, { Component } from 'react';
import axios from 'axios';

class AddUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    }
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBZq31suUREzafxAD-gJiOK-Z2nglEBbQw', userData)
      .then(response => {
        console.log(response)
        const id = response.data.localId;
        const email = response.data.email;
        this.onSubmitSuccess(id, email);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmitSuccess = (id, email) => {
    // console.log(id, email);    
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: email,
      role: this.state.role,
      authId: id
    }
    axios.post('https://reactcms-v1.firebaseio.com/users.json', newUser)
      .then(response => {
        console.log(response);
        this.props.history.replace('/dashboard/users');
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancelHandler = (event) => {
    event.preventDefault();
    this.props.history.replace('/dashboard/users');
  }

  render () {
    return (
      <div className='container'>
        <h1>Add New User</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' className='form-control' type='text' value={this.state.firstName} placeholder='First Name' onChange={(event) => this.onFirstNameChange(event)} required />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' className='form-control' type='text' value={this.state.lastName} placeholder='Last Name' onChange={(event) => this.onLastNameChange(event)} required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input id='email' className='form-control' type='email' value={this.state.email} placeholder='example@example.com' onChange={(event) => this.onEmailChange(event)} required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input id='password' className='form-control' type='password' value={this.state.password} onChange={(event) => this.onPasswordChange(event)} minLength='6' required />
          </div>
          <div className='form-group'>
            <label htmlFor='role'>Role</label>
            <select id='role' className='form-control' name='role' value={this.state.role} onChange={(event) => this.onRoleChange(event)} required>
              <option defaultValue>Choose...</option>
              <option name='role' value='Subscriber'>Subscriber</option>
              <option name='role' value='Editor'>Editor</option>
              <option name='role' value='Author'>Author</option>
              <option name='role' value='Administrator'>Administrator</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary float-right'>Add User</button>
          <button type='button' className='btn btn-secondary float-right mr-2' onClick={this.onCancelHandler}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
