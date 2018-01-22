import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Required'
  }
  if(!values.url) {
    errors.url = 'Required'
  }
  return errors
}

const cleanUrl = value => value && value.toLowerCase().trim().replace(/[^a-zA-Z0-9 -]+/g, '').replace(/\s+/g, '-');

const createRenderer = render => ({ input, meta, label, placeholder }) => {
  return (
    <div className={meta.error && meta.touched ? 'alert-danger form-group' : 'form-group' }>
      <label>{label}</label>
      {render(input, label, placeholder)}
      {meta.error && 
        meta.touched &&
        <span>
          {meta.error}
        </span>}
  </div>
  );
}

const RenderInput = createRenderer((input, label, placeholder) => {
  return (
    <input {...input} placeholder={placeholder} className='form-control' />
  );
});

const RenderTextarea = createRenderer((input, label) => {
  return (
    <textarea {...input} placeholder={label} className='form-control' style={{height: '400px', overflowY: 'scroll'}} />
  );
});

let EditPageForm = ({ handleSubmit, submitting, initialValues, pageLink }) => {
  return (
    <div className='container'>
      <h1 className='mb-3'>Edit Page </h1>
      <div style={{overflow: 'hidden'}}>
        <Link className='btn btn-primary float-right mb-3 mr-2' to={`/${pageLink}`}>View</Link>
        <Link className='btn btn-secondary float-right mb-1 mr-2' to='/dashboard/pages'>Cancel</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <Field name='title' label='Title' placeholder='title' component={RenderInput} />
        <Field name='url' label='URL' normalize={cleanUrl} placeholder='example-page-url' component={RenderInput} />
        <Field name='body' id='body' label='Content' component={RenderTextarea} />
        <button type='submit' className='btn btn-primary float-right' disabled={submitting}>Save Changes</button>
      </form>
      
    </div>
    
  );
}

EditPageForm = reduxForm({
  form: 'editPage',
  destroyOnUnmount: false,
  validate,
  enableReinitialize: true  
})(EditPageForm);

EditPageForm = connect(
  state => ({
    initialValues: state.pages.selectedPage, // pull initial values from account reducer
  })
)(EditPageForm);

export default EditPageForm;
