import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

const navItem = ({ label, url }) => {
  return (
    <li className='nav-item'><NavLink exact to={`/${url}`} className='nav-link navlink'>{label}</NavLink></li>
  );
}

export default navItem;
