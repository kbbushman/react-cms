import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import NavBar from '../../components/Navigation/NavBar/NavBar';

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

  render() {

    if(!this.state.navList.length) {
      return null;
    }
  
    return (
      <Aux>
        <NavBar navList={this.state.navList} />
      </Aux>
    );
  }
}

export default Navigation;
