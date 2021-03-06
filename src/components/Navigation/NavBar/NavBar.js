import React from 'react';
import { Link } from 'react-router-dom';

import NavItems from './NavItems/NavItems';
import './NavBar.css';

const navBar = (props) => {
  let attachedClasses = 'navbar navbar-expand-lg navbar-dark bg-dark navbarHide';
  if(props.show) {
    attachedClasses = 'navbar navbar-expand-lg navbar-dark bg-dark navbarShow';
  }

  return (
    <nav className={attachedClasses}>
      <Link className="navbar-brand" to="/">ReactCMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <NavItems navList={props.navList} />
        </ul> 
      </div>
    </nav>
  );
}

export default navBar;
