import React, { Component } from 'react';
import './Page.css';

class Page extends Component {    
  // console.log(props);

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('Next Props', nextProps.page.url);
  //   console.log('updated!')
  //   return this.props.page.url !== this.props.url;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.page.title !== this.props.page.title;
  }

  render() {
    const { title, body } = this.props.page;
    return (
      <div className='container'>
        <pre>
          <h1>{title}</h1>
          <p>{body}</p>
        </pre>
      </div>
    );
  }

}

export default Page;
