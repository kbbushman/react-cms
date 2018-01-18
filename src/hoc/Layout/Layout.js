import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Navigation from '../../containers/Navigation/Navigation';

class Layout extends Component {
  state = {
    showToolbar: true,
    showNavigation: true
  }

  showNavHandler = () => {
    this.setState({showNavigation: true});
  }

  render() {
    console.log('Render', this.state);
    return (
      <Aux>
        <Toolbar show={this.state.showToolbar} showNav={this.showNavHandler} />
        <Navigation show={this.state.showNavigation} />
        <main className='mt-5'>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
