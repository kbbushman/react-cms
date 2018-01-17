import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Posts/Post/Post';

class PostContainer extends Component {
  state = {
    post: {
      title: '',
      slug: '',
      body: '',
      id: ''
    }
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const postSlug = this.props.match.params.id;
    if(this.state.post.url !== postSlug) {
      axios.get(`https://reactcms-v1.firebaseio.com/posts.json?orderBy="slug"&equalTo="${postSlug}"`)
      .then(response => {
        let postData = {};
        console.log('Response', response);
        for(let key in response.data) {
          postData = {
            ...response.data[key],
            id: key
          };
        }
        this.setState({post: postData})
      })
      .catch(err => console.log(err));

    // const postId = this.props.match.params.id;
    // axios.get(`https://reactcms-v1.firebaseio.com/posts/${postId}.json/`)
    //   .then(response => {
    //     const postData = response.data;
    //     this.setState({post: postData})
    //   })
    //   .catch(err => console.log(err));
    }
  }

  render() {
    if(this.state.post.title === '') {
      return (
        <div className='container'>
          <h1>Loading...</h1>
        </div>
        );
    }

    return <Post post={this.state.post} />;
  }
}

export default PostContainer;
