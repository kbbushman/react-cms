import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import Dashboard from './containers/Dashboard/Dashboard';
import PageContainer from './containers/PagesContainer/PageContainer/PageContainer';
import PostContainer from './containers/PostsContainer/PostContainer/PostContainer';

class App extends Component {

  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/posts/:id" component={PostContainer} />
            <Route path="/:id" component={PageContainer} />
            <Route path="/" component={Welcome} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
