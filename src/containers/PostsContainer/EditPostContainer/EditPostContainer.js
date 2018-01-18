import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditPostContainer extends Component {
  state = {
    title: '',
    slug: '',
    body: '',
    dateCreated: '',
    timeCreated: '',
    updated: ''
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    axios.get(`https://reactcms-v1.firebaseio.com/posts/${postId}.json/`)
      .then(response => {
        const postData = response.data;
        // console.log(postData)
        this.setState({
          title: postData.title,
          slug: postData.slug,
          body: postData.body,
          dateCreated: postData.dateCreated,
          timeCreated: postData.timeCreated,
          updated: postData.updataed
        })
      })
      .catch(err => console.log(err));
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
    const postId = this.props.match.params.id;
    const updatedPost = {
      title: this.state.title,
      slug: this.state.slug,
      body: this.state.body,
      dateCreated: this.state.dateCreated,
      timeCreated: this.state.timeCreated,
      updated: new Date().toLocaleString()
    }
    axios.put(`https://reactcms-v1.firebaseio.com/posts/${postId}.json`, updatedPost)
      .then(response => {
        console.log(response);
        this.props.history.replace('/dashboard/posts');
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancelHandler = () => {
    this.props.history.replace('/dashboard/posts');
  }

  render() {
    return (
      <div className='container'>
        <h1>Edit Post</h1>
        <div style={{overflow: 'hidden'}}>
          {/* <Link className='btn btn-primary float-right mb-3 mr-2' to={`/${this.props.match.params.id}`}>View</Link> */}
          <Link className='btn btn-secondary float-right mb-1 mr-2' to={`/dashboard/pages`}>Cancel</Link>
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
          <button type='submit' className='btn btn-primary float-right'>Save Changes</button>
          <button type='button' className='btn btn-secondary float-right' onClick={this.onCancelHandler}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default EditPostContainer;
