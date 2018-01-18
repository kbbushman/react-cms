import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../../hoc/Aux/Aux';
import './ToolbarItems.css';

const toolbarItems = (props) => {
  return (
    <Aux>
      <li className='nav-item'>
        <Link to="/" className='nav-link navLink' onClick={props.showNav}>View Site</Link>
      </li>
      <li className='nav-item'>
        <Link to="/dashboard" className='nav-link navLink'>Dashboard</Link>
      </li>
      <li className='nav-item'>
        <Link to="/logout" className='nav-link navLink'>Logout</Link>
      </li>
      <li className='nav-item'>
        <span className='nav-link navLink'>Welcome Kenneth...!</span>
      </li>
    </Aux>
  );
}

export default toolbarItems;
