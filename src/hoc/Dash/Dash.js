import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// const Dash = (props) => {
class Dash extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <nav className="col-sm-3 col-md-2 d-sm-block bg-dark sidebar">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/dashboard/pages">Pages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/dashboard/posts">Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/dashboard/nav-menu">Nav Menu</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/dashboard/users">Users</NavLink>
              </li>
              
            </ul>
          </nav>
  
          <main role="main" className="col-sm-9 ml-sm-auto col-md-10">
            {this.props.children}
          </main>
  
        </div>
      </div>
    );
  } 
}

export default Dash;
