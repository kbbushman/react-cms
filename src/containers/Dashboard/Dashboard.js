import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dash from '../../hoc/Dash/Dash';
import Summary from '../../containers/Dashboard/Summary/Summary';
import PagesContainer from '../../containers/PagesContainer/PagesContainer';
import AddPageContainer from '../../containers/PagesContainer/AddPageContainer/AddPageContainer';
import EditPageContainer from '../../containers/PagesContainer/EditPageContainer/EditPageContainer';
import PostsContainer from '../../containers/PostsContainer/PostsContainer';
import AddPostContainer from '../../containers/PostsContainer/AddPostContainer/AddPostContainer';
import EditPostContainer from '../../containers/PostsContainer/EditPostContainer/EditPostContainer';
import NavMenu from '../../containers/Navigation/NavMenu/NavMenu';
import UsersContainer from '../../containers/UsersContainer/UsersContainer';
import AddUserContainer from '../../containers/UsersContainer/AddUserContainer/AddUserContainer';
import EditUserContainer from '../../containers/UsersContainer/EditUserContainer/EditUserContainer';

class Dashboard extends Component {

  render() {
    return (
      <Dash>
        <Route path='/dashboard' exact component={Summary} />
        <Route path='/dashboard/add-page' exact component={AddPageContainer} />
        <Route path='/dashboard/edit-page/:id' exact component={EditPageContainer} />
        <Route path='/dashboard/pages' exact component={PagesContainer} />
        <Route path='/dashboard/add-post' exact component={AddPostContainer} />
        <Route path='/dashboard/edit-post/:id' exact component={EditPostContainer} />
        <Route path='/dashboard/posts' exact component={PostsContainer} />
        <Route path='/dashboard/nav-menu' exact component={NavMenu} />
        <Route path='/dashboard/add-user' exact component={AddUserContainer} />
        <Route path='/dashboard/edit-user/:id' exact component={EditUserContainer} />
        <Route path='/dashboard/users' exact component={UsersContainer} />
      </Dash>
    );
  }
}

export default Dashboard;
