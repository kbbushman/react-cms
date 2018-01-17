import React, { Component } from 'react';
import axios from 'axios';

import PageList from '../../components/Pages/PageList/PageList';

class Pages extends Component {
  state = {
    pages: []
  }

  componentDidMount() {
    this.getPages();
  }

  getPages = () => {
    axios.get('https://reactcms-v1.firebaseio.com/pages.json')
      .then(response => {
        const pagesData = [];
        // console.log(response.data);
        for(let key in response.data) {
          pagesData.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({pages: pagesData});
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  deleteClickHandler = (event) => {
    console.log(event.target.id);
    const pageId = event.target.id;
    axios.delete(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json`)
      .then(response => {
        // console.log(response);
        this.getPages();
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.props);
    return <PageList pages={this.state.pages} deleteClick={(event) => this.deleteClickHandler(event)} />
  }
}

export default Pages;
