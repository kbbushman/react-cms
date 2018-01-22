import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import * as actions from '../../store/actions/index';

class Navigation extends Component {
  state = {
    navList: []
  }

  componentDidMount() {
    if(!this.state.navList.length) {
      axios.get('https://reactcms-v1.firebaseio.com/navigation.json')
        .then(response => {
          const navData = [];
          // console.log(response.data);
          for(let key in response.data) {
            navData.push({
              ...response.data[key],
              id: key
            });
          }
          this.setState({navList: navData});
          // console.log(navData);
        })
        .catch(err => console.log(err));
    }
    
  }

  componentWillMount() {
    // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
    this.props.history.listen(() => {
        if(!this.props.history.location.pathname.includes('/dashboard') && this.props.history.location.pathname.substr(1) !== this.props.selectedPage.url) {
          this.props.onInitPage(this.props.history.location.pathname.substr(1))
        }
        // if(!this.props.history.location.pathname.includes('/dashboard')) {
        //   this.props.onInitPage(this.props.history.location.pathname.substr(1))
        // }
        
    });
  }

  render() {
    if(window.location.pathname.includes('/dashboard')) {
      return null;
    }

    return (
      <Aux>
        <NavBar
          navList={this.state.navList}
          show={this.props.show} />
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: (pageTitle) => dispatch(actions.getPage(pageTitle))
  }
}

const mapStateToProps = state => {
  return {
    selectedPage: state.pages.selectedPage
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
