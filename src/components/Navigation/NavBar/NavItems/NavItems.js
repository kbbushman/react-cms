import React from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
  const navItems = props.navList.map(item => {
    return (
      <span key={item.id}>
        <NavItem  label={item.label} url={item.url} />
      </span>
    );
  });

  if(!navItems.length) {
    return null;
  }

  return (
    <Aux>
      {navItems}
    </Aux>
  );
}

export default navItems;
