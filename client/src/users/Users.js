import React from 'react';
import axios from 'axios';
import requireAuth from '../auth/requireAuth';

class Users extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    const endpoint = "http://localhost:9090/api/users"
    const headers = { authorization: localStorage.getItem('jwt') }
    axios
      .get(endpoint, { headers })
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(error => {
        console.error(error);
      })
  }
  render(){
    return (
      <>
        <h2>Users</h2>
        <div className="users-con">
          {this.state.users.map(user => (
            <div className="user" key={user.username}>
              <div className="username" >{user.username}</div>
              <hr />
              <div className={`${user.department} department`} >Dept: {user.department}</div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default requireAuth(Users);