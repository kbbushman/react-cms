import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../../hoc/Aux/Aux';

const userListItem = ({ user, deleteClick }) => {
    return (
      <Aux>
        <tr key={user.id}>
          <td><h5 className='float-left'><Link to={`/dashboard/users/${user.id}`}>{user.firstName} {user.lastName}</Link></h5></td>
          <td>{user.role}</td>
          <td>{user.email}</td>
          <td>
            <Link className='btn btn-secondary btn-sm mr-2' to={`/users/${user.id}`}>View</Link>
            <Link className='btn btn-primary btn-sm mr-2' to={`/dashboard/edit-user/${user.id}`}>Edit</Link>
            <button
              className='btn btn-danger btn-sm'
              onClick={(event) => deleteClick(event)}
              id={user.id}>Delete</button>
            </td>
        </tr>
      </Aux>
    );
}

export default userListItem;
