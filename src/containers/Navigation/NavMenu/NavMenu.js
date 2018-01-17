import React, { Component } from 'react';
import axios from 'axios';

// import EditNav from '../../../components/Navigation/EditNav/EditNav';


class NavMenu extends Component {
  state = {
    pages: [],
    label: '',
    url: ''
  }

  componentDidMount() {
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
        // console.log(pagesData);
      })
      .catch(err => console.log(err));
  }

  onLabelChange = (event) => {
    this.setState({label: event.target.value});
  }

  onURLChange = (event) => {
    this.setState({url: event.target.value});
  }

  onSubmitHandler = (event) => {
    const newNavItem = {
      label: this.state.label,
      url: this.state.url
    }
    axios.post('https://reactcms-v1.firebaseio.com/navigation.json', newNavItem)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  change = (event) => {
    const filteredPage = this.state.pages.filter(page => {
      return page.id === event.target.name
    });
    // console.log(filteredPage);
    this.changed(filteredPage);
    // var name = event.target.name;
    // var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    // this.setState({
    //   [name]: value
    // }, () => {
    //   console.log(this.state);
    // })
    // console.log(event.target.value);
  }

  changed = (pageArr) => {
    const page = pageArr[0];
    const newNavItem = {
      label: page.title,
      url: page.url,
      pageId: page.id
    };
    axios.post('https://reactcms-v1.firebaseio.com/navigation.json', newNavItem)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onCancelHandler = (event) => {
    // event.preventDefault();
    this.setState({label: '', url: ''});
    // this.props.history.replace('/pages');
  }

  render() {
    if(!this.state.pages.length) {
      return (
        <div className='container mt-5'>
          <h1>Loading...</h1>
        </div>
      );
    }

    const pages = this.state.pages.map(page => {
      return (
        <tr key={page.id}>
          <td><input name={page.id} value={page.id} type='checkbox' onChange={this.change}   /></td>
          <td>{page.title}</td>
        </tr>
      )
    });

    return (
      <div className='container'>
        <h1>Nav Menu</h1>
        <section className='mt-5 mb-5'>
          <h4>Add Pages</h4>
          <table className='table table-striped table-dark table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th>Add</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {pages}
            </tbody>
          </table>
        </section>
        <section>
          <h4>Add Custom Link</h4>
          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input id='label' className='form-control' type='text' value={this.state.label} placeholder='Navigation Label' onChange={(event) => this.onLabelChange(event)} />
            </div>
            <div className='form-group'>
              <label htmlFor='title'>URL</label>
              <input id='url' className='form-control' type='text' value={this.state.url} placeholder='URL' onChange={(event) => this.onURLChange(event)} />
            </div>
            <button type='submit' className='btn btn-primary float-right'>Add Custom Link</button>
            <button type='submit' className='btn btn-primary float-right' onClick={(event) => this.onCancelHandler(event)}>Cancel</button>
          </form>
        </section>
      </div>
    );


    // return (
    //   <EditNav pages={this.state.pages} inputChanged={(pageArr) => this.changed(pageArr)} />
    // );
  }
}

export default NavMenu;
