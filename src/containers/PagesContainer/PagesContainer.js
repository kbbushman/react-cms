import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import PageList from '../../components/Pages/PageList/PageList';
import Spinner from '../../components/UI/Spinner/Spinner';
import FlashMessage from '../../components/UI/FlashMessage/FlashMessage';
import * as actions from '../../store/actions/index';

class Pages extends Component {

  componentDidMount() {
    this.props.onInitPages();
  }

  render() {
    if(this.props.success) {
      window.scrollTo(0, 0);
    }
    // Move FlashMessage to Dashboard
    let flashMessage = this.props.message ?
      <FlashMessage error={this.props.error} message={this.props.message} /> : null;
    let pageList = <Spinner />;
    if(this.props.pages.length) {
      pageList = (
        <PageList pages={this.props.pages} deleteClick={(event) => this.props.onDeleteClick(event)} />
      );
    }

    return (
      <Aux>
        {flashMessage}
        {pageList}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages.pageArray,
    loading: state.pages.loading,
    success: state.pages.success,
    error: state.pages.error,
    message: state.pages.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPages: () => dispatch(actions.getPages()),
    onDeleteClick: (event) => dispatch(actions.deletePage(event.target.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
