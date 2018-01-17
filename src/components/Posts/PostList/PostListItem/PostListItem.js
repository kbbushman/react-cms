import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../../hoc/Aux/Aux';

const postListItem = ({ post, deleteClick }) => {
    return (
      <Aux>
        <tr key={post.id}>
          <td><h5 className='float-left'><Link to={`/dashboard/edit-post/${post.id}`}>{post.title}</Link></h5></td>
          <td>Kenneth Bushman</td>
          <td>November 25, 2017</td>
          <td>
            <Link className='btn btn-secondary btn-sm mr-2' to={`/posts/${post.slug}`}>View</Link>
            <Link className='btn btn-primary btn-sm mr-2' to={`/dashboard/edit-post/${post.id}`}>Edit</Link>
            <button
              className='btn btn-danger btn-sm'
              onClick={(event) => deleteClick(event)}
              id={post.id}>Delete</button>
            </td>
        </tr>
      </Aux>
    );
}

export default postListItem;
