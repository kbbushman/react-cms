import React from 'react';
import { Link } from 'react-router-dom';

import ToolbarItems from './ToolbarItems/ToolbarItems';
import './Toolbar.css';

const toolbar = (props) => {
  let attachedClasses = 'navbar navbar-expand-lg toolbar-hide';
  if(props.show) {
    attachedClasses = 'navbar navbar-expand-lg navbar-dark toolbar-show';
  }
  return (
    <nav className={attachedClasses} style={{background: '#000'}}>
      <Link className="navbar-brand" to="/">ReactCMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <ToolbarItems showNav={props.showNav} />
        </ul> 
      </div>
    </nav>
  );
}

export default toolbar;
