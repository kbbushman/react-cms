import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddPostContainer extends Component {
  state = {
    title: '',
    slug: '',
    body: ''
  }

  onTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  onSlugChange = (event) => {
    this.setState({slug: event.target.value});
  }

  onBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const newPost = {
      title: this.state.title,
      slug: this.state.slug,
      body: this.state.body
    }
    axios.post('https://reactcms-v1.firebaseio.com/posts.json', newPost)
      .then(response => {
        console.log(response);
        this.addPostSuccess();
      })
      .catch(err => {
        console.log(err);
      });
  }

  addPostSuccess = () => {
    this.props.history.replace('/dashboard/posts');
  }

  onCancelHandler = () => {
    this.props.history.replace('/dashboard/posts');
  }

  render () {
    return (
      <div className='container'>
        <h1>Add New Post</h1>
        <div style={{overflow: 'hidden'}}>
          <Link className='btn btn-secondary float-right mb-1 mr-2' to={`/dashboard/posts`}>Cancel</Link>
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input id='title' className='form-control' type='text' value={this.state.title} placeholder='Title' onChange={(event) => this.onTitleChange(event)} />
          </div>
          <div className='form-group'>
            <label htmlFor='slug'>Slug</label>
            <input id='slug' className='form-control' type='text' value={this.state.slug} placeholder='Slug' onChange={(event) => this.onSlugChange(event)} />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>Content</label>
            <textarea id='body' className='form-control' style={{height: '500px', overflowY: 'scroll'}} value={this.state.body} onChange={(event) => this.onBodyChange(event)}></textarea>
          </div>
          <button type='submit' className='btn btn-primary float-right'>Save Post</button>
          <button type='button' className='btn btn-secondary float-right mr-3' onClick={this.onCancelHandler}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddPostContainer;
