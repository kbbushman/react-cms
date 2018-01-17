import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class EditPageContainer extends Component {
  state = {
    title: '',
    url: '',
    body: ''
  }

  componentDidMount() {
    const pageId = this.props.match.params.id;
    axios.get(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json/`)
      .then(response => {
        const pageData = response.data;
        // console.log(pageData)
        this.setState({title: pageData.title, url: pageData.url, body: pageData.body})
      })
      .catch(err => console.log(err));
  }

  onTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  onURLChange = (event) => {
    this.setState({url: event.target.value});
  }

  onBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const pageId = this.props.match.params.id;
    const updatedPage = {
      title: this.state.title,
      url: this.state.url,
      body: this.state.body
    }
    axios.put(`https://reactcms-v1.firebaseio.com/pages/${pageId}.json`, updatedPage)
      .then(response => {
        window.location.reload();
        // console.log(response);
        // this.props.history.replace('/pages');
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancelHandler = () => {
    this.props.history.replace('/dashboard/pages');
  }

  render() {
    return (
      <div className='container'>
        <h1 className='mb-3'>Edit Page </h1>
        <div style={{overflow: 'hidden'}}>
          <Link className='btn btn-primary float-right mb-3 mr-2' to={`/${this.props.match.params.id}`}>View</Link>
          <Link className='btn btn-secondary float-right mb-1 mr-2' to={`/dashboard/pages`}>Cancel</Link>
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input id='title' className='form-control' type='text' value={this.state.title} placeholder='Title' onChange={(event) => this.onTitleChange(event)} />
          </div>
          <div className='form-group'>
            <label htmlFor='url'>URL</label>
            <input id='url' className='form-control' type='text' value={this.state.url} placeholder='URL' onChange={(event) => this.onURLChange(event)} />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>Content</label>
            <textarea id='body' className='form-control' style={{height: '500px', overflowY: 'scroll'}} value={this.state.body} onChange={(event) => this.onBodyChange(event)}></textarea>
          </div>
          <button type='submit' className='btn btn-primary float-right'>Save Changes</button>
          <button type='button' className='btn btn-secondary mr-2 float-right' onClick={this.onCancelHandler}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default EditPageContainer;
