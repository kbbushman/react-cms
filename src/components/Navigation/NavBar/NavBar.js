import React from 'react';
import { Link } from 'react-router-dom';

import NavItems from './NavItems/NavItems';

const navBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
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
