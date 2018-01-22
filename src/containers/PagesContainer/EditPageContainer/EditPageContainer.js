import React, { Component } from 'react';
import { connect } from 'react-redux';


import Aux from '../../../hoc/Aux/Aux';
import FlashMessage from '../../../components/UI/FlashMessage/FlashMessage';
import Spinner from '../../../components/UI/Spinner/Spinner';
import EditPageForm from '../../../components/Pages/EditPageForm/EditPageForm';
import * as actions from '../../../store/actions/index';

class EditPageContainer extends Component {

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      title: nextProps.page.title,
      url: nextProps.page.url,
      body: nextProps.page.body,
      dateCreated: nextProps.page.dateCreated,
      timeCreated: nextProps.page.timeCreated
    });
}

  componentDidMount() {
    const pageId = this.props.match.params.id;
    this.props.onEditPageInit(pageId);
  }

  handleSubmit = (value) => {
    console.log(value);
    const pageId = this.props.match.params.id;
    const updatedPage = {
      title: value.title,
      url: value.url,
      body: value.body,
      dateCreated: value.dateCreated,
      timeCreated: value.timeCreated,
      updated: new Date().toLocaleString()

    }
    this.props.onHandleSubmit(pageId, updatedPage);
  }

  render() {
    if(this.props.success) {
      window.scrollTo(0, 0);
    }

    let flashMessage = this.props.message ?
      <FlashMessage error={this.props.error} success={this.props.success} message={this.props.message} /> : null;

    let editForm = <Spinner />;

    // Add CKEditor
    if(this.props.page) {
      editForm = <EditPageForm onSubmit={this.handleSubmit} pageLink={this.props.page.url}/>
    }

    return (
      <Aux>
        {flashMessage}
        {editForm}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.pages.selectedPage,
    error: state.pages.error,
    success: state.pages.success,
    message: state.pages.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditPageInit: (pageId) => dispatch(actions.editPageInit(pageId)),
    onHandleSubmit: (pageId, updatedPage) => dispatch(actions.updatePageSubmit(pageId, updatedPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageContainer);
