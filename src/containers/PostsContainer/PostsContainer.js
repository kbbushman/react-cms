import React, { Component } from 'react';
import axios from 'axios';

import PostList from '../../components/Posts/PostList/PostList';

class PostsContainer extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get('https://reactcms-v1.firebaseio.com/posts.json')
      .then(response => {
        const postsData = [];
        // console.log(response.data);
        for(let key in response.data) {
          postsData.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({posts: postsData});
        // console.log(postsData);
      })
      .catch(err => console.log(err));
  }

  deleteClickHandler = (event) => {
    // console.log(event.target.id)
    const postId = event.target.id;
    axios.delete(`https://reactcms-v1.firebaseio.com/posts/${postId}.json`)
      .then(response => {
        // console.log(response);
        this.getPosts();
      })
      .catch(err => console.log(err));
  }

  render() {
    return <PostList posts={this.state.posts} deleteClick={(event) => this.deleteClickHandler(event)} />;
  }
}

export default PostsContainer;
