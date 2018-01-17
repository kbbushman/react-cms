import React from 'react';
import { Link } from 'react-router-dom';

import PostListItem from './PostListItem/PostListItem';

const postList = (props) => {
  // console.log('Posts Props',  props);
  const postList = props.posts.map(post => {
    return <PostListItem key={post.title} post={post} deleteClick={(event) => props.deleteClick(event)} />
  });

  if(!props.posts.length) {
    return (
      <div className='container mt-5'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Posts</h1>
      <Link className='btn btn-primary float-right mb-3' to={'/dashboard/add-post'}>Add New Post</Link>
      <table className='table table-striped table-dark table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {postList}
        </tbody>
      </table>
    </div>
  );
}

export default postList;
