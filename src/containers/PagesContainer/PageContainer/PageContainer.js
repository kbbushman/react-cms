import React, { Component } from 'react';
import axios from 'axios';

import Page from '../../../components/Pages/Page/Page';

class PageContainer extends Component {
  state = {
    page: {
      title: '',
      url: '',
      body: '',
      id: ''
    }
  }

  componentDidMount() {
    this.getPage();

    // const pageId = this.props.match.params.id;
    // // console.log(postId)
    // axios.get(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json/`)
    //   .then(response => {
    //     // const pageData = response.data;
    //     const pageData = [];
    //     // console.log(response.data);
    //     for(let key in response.data) {
    //       pageData.push({
    //         ...response.data[key],
    //         id: key
    //       });
    //     }
    //     this.setState({page: pageData})
    //   })
    //   .catch(err => console.log(err));
  }

  getPage = () => {
  const pageTitle = this.props.match.params.id;
  if(this.state.page.url !== pageTitle) {
    axios.get(`https://reactcms-v1.firebaseio.com/pages.json?orderBy="url"&equalTo="${pageTitle}"`)
    .then(response => {
      // const pageData = response.data;
      let pageData = {};
      console.log('Response', response);
      for(let key in response.data) {
        pageData = {
          ...response.data[key],
          id: key
        };
      }
      this.setState({page: pageData})
    })
    .catch(err => console.log(err));
  }
  
  }

  render () {
    console.log('Render', this.state.page.url);
    
    if(this.state.page.title === '') {
      return (
        <div className='container'>
          <h1>Loading...</h1>
        </div>
      );
    }

    if(this.state.page.title !== this.props.match.params.id) {
      this.getPage();
    }

    return <Page page={this.state.page} />;
  }
}

export default PageContainer;
