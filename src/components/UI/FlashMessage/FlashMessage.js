import React from 'react';

const flashMessage = ({ error, success, message }) => {
  let classList = 'container alert alert-dismissible alert-success mb-3';
  if(error === true) {
    classList = 'container alert alert-dismissible alert-danger mb-3';
  } 
  if(success === true && message !== null) {
    if(document.querySelector('.alert')) {
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  }
  
  return (
    <div className={classList}>
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <h5 className='mb-0'>{message}</h5>
    </div>
  );
}

export default flashMessage;
