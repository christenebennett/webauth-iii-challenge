import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  
  state = {
    username: '',
    password: '',
    department: ''
  }

  onInputChange = event =>  {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    })
  }

  onSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    const endpoint = "http://localhost:9090/api/register"
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token)
      })
      .then (
        this.props.history.push('/users')
      )
      .catch(err => {
        console.error(err)
      })
  }

  render(){
    return (
      <>
        <h2>Sign Up</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input 
            name="username"
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input 
            name="password"
            type="text"
            id="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <label htmlFor="department">Department</label>
          <input 
            name="department"
            type="text"
            id="department"
            value={this.state.department}
            onChange={this.onInputChange}
          />
          <button type="submit">Register</button>
        </form>
      </>
    )
  }

}

export default Signup;