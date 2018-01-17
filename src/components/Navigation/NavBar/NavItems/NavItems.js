import React from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
  const navItems = props.navList.map(item => {
    return <NavItem key={item.id} label={item.label} url={item.url} />
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
