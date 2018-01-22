import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import Aux from '../../../hoc/Aux/Aux';
import FlashMessage from '../../../components/UI/FlashMessage/FlashMessage';
import * as actions from '../../../store/actions/index';

class AddPageContainer extends Component {
  state = {
    title: '',
    url: '',
    body: ''
  }

  // Refactor input change methods into one method
  onTitleChange = (event) => {
    const cleanUrl = event.target.value.toLowerCase().trim().replace(/[^a-zA-Z0-9 -]+/g, '').replace(/\s+/g, '-');
    this.setState({title: event.target.value, url: cleanUrl});
  }

  onURLChange = (event) => {
    const cleanUrl = event.target.value.toLowerCase().trim().replace(/[^a-zA-Z0-9 -]+/g, '').replace(/\s+/g, '-');
    this.setState({url: cleanUrl});
  }

  onBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const newPage = {
      title: this.state.title,
      url: this.state.url,
      body: this.state.body,
      dateCreated: new Date().toLocaleDateString(),
      timeCreated: new Date().toLocaleTimeString()
    }
    this.props.onSubmitNewPage(newPage);
  }

  onCancelHandler = () => {
    this.props.history.replace('/dashboard/pages');
  }

  render () {

    if(this.props.success) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.props.history.replace('/dashboard/pages')
      }, 2000);
    }

    // Move FlashMessage to Dashboard
    const flashMessage = this.props.message ? <FlashMessage error={this.props.error} success={this.props.success} message={this.props.message} /> : null;

    // Refactor with redux-form, add CKEditor
    return (
      <Aux>
        {flashMessage}
        <div className='container'>
          <h1 className='mb-3'>Add New Page</h1>
          <div style={{overflow: 'hidden'}}>
            <Link className='btn btn-secondary float-right mb-1 mr-2' to={`/dashboard/pages`}>Back to Dashboard</Link>
          </div>
          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input id='title' className='form-control' type='text' value={this.state.title} placeholder='Title' onChange={(event) => this.onTitleChange(event)} />
            </div>
            <div className='form-group'>
              <label htmlFor='url'>URL</label><br />
              <small>http://localhost:3000/...</small>
              <input id='url' className='form-control' type='text' value={this.state.url} placeholder='new-page-url' onChange={(event) => this.onURLChange(event)} />
            </div>
            <div className='form-group'>
              <label htmlFor='body'>Content</label>
              <textarea id='body' className='form-control' style={{height: '500px', overflowY: 'scroll'}} value={this.state.body} onChange={(event) => this.onBodyChange(event)}></textarea>
            </div>
            <button type='submit' className='btn btn-primary float-right'>Save Page</button>
            <button type='button' className='btn btn-secondary float-right mr-3' onClick={this.onCancelHandler}>Cancel</button>
          </form>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.pages.error,
    success: state.pages.success,
    message: state.pages.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitNewPage: (newPage) => dispatch(actions.addPage(newPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPageContainer);
