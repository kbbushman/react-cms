import React from 'react';

const post = (props) => {
  const { title, body } = props.post;
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default post;
