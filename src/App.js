import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './containers/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Dashboard from './containers/Dashboard/Dashboard';
import PageContainer from './containers/PagesContainer/PageContainer/PageContainer';
import PostContainer from './containers/PostsContainer/PostContainer/PostContainer';
// import AddUser from './components/User/AddUser/AddUser';
// import EditUser from './components/User/EditUser/EditUser';
// import User from './components/User/User';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/posts/:id" component={PostContainer} />
          <Route path="/:id" component={PageContainer} />
          <Route path="/" component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;
