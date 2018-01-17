import React, { Component } from 'react';

class Page extends Component {    
  // console.log(props);

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Next Props', nextProps.page.url);
    return true;
  }

  render() {
    const { title, body } = this.props.page;
    return (
      <div className='container'>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }

}

export default Page;
