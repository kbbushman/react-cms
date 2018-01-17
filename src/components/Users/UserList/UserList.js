import React from 'react';
import { Link } from 'react-router-dom';

import UserListItem from './UserListItem/UserListItem';

const userList = (props) => {
  // console.log('Users Props',  props);
  const userList = props.users.map(user => {
    return <UserListItem key={user.id} user={user} deleteClick={(event) => props.deleteClick(event)} />
  });

  if(!props.users.length) {
    return (
      <div className='container mt-5'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Users</h1>
      <Link className='btn btn-primary float-right mb-3' to={'/dashboard/add-user'}>Add New User</Link>
      <table className='table table-striped table-dark table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList}
        </tbody>
      </table>
    </div>
  );
}

export default userList;
