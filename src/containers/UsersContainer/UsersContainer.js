import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import UsersList from '../../components/Users/UserList/UserList';

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('https://reactcms-v1.firebaseio.com/users.json')
      .then(response => {
        const usersData = [];
        // console.log(response.data);
        for(let key in response.data) {
          usersData.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({users: usersData});
        // console.log(postsData);
      })
      .catch(err => console.log(err));
  }

  deleteClickHandler = (event) => {
    // console.log(event.target.id)
    const userId = event.target.id;
    axios.delete(`https://reactcms-v1.firebaseio.com/users/${userId}.json`)
      .then(response => {
        // console.log(response);
        this.getUsers();
      })
      .catch(err => console.log(err));
  }

  render() {
    // const users = this.state.users.map(user => {
    //   return (
    //     <div key={user.id} style={{margin: '40px auto'}}>
    //       <h3><Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link></h3>
    //       <p>{user.id}</p>
    //       <p>{user.email}</p>
    //       <p>{user.role}</p>
    //       <Link className='btn btn-primary' to={`/users/edit/${user.id}`}>Edit</Link>
    //     </div>
    //   );
    // });

    // if(!this.state.users.length) {
    //   return <h1>Loading...</h1>
    // }

    return <UsersList users={this.state.users} deleteClick={(event) => this.deleteClickHandler(event)} />;
  }
}

export default Users;
