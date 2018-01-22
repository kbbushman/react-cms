import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../../hoc/Aux/Aux';
import Page from '../../../components/Pages/Page/Page';
import Spinner from '../../../components/UI/Spinner/Spinner';
import FlashMessage from '../../../components/UI/FlashMessage/FlashMessage';
import * as actions from '../../../store/actions/index';

class PageContainer extends Component {

  componentDidMount() {
    // this.getPage();
    // const pageTitle = this.props.match.params.id;
    const pageTitle = this.props.history.location.pathname.substr(1);
    if(this.props.page === null) {
      this.props.onInitPage(pageTitle);
      // console.log('CMP OnInitPage()')
    }
    
    console.log(this.props.history.location.pathname.substr(1));
    // if(this.props.history.location.pathname === '/') {
    //   console.log(this.props.history);
    //   this.props.onInitPage('');
    // }
  }

  render () {
    // Move Flashmessage to Dashboard
    let flashMessage = this.props.message ?
      <FlashMessage error={this.props.error} message={this.props.message} /> : null;
    let selectedPage = <Spinner />;
    if(this.props.page) {
      selectedPage = (
        <Page page={this.props.page} />
      );
    }

    return (
      <Aux>
        {flashMessage}
        {selectedPage}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.pages.selectedPage,
    error: state.pages.error,
    message: state.pages.message,
    success: state.pages.success
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: (pageTitle) => dispatch(actions.getPage(pageTitle))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageContainer));
