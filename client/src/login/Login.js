import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

  onInputChange = event =>  {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:9090/api/login"
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token)
        this.props.history.push('/users')
      })
      .catch(error => {
        console.error(error)
      })
  }

  render(){
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input 
            name="username"
            type="text"
            id="username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input 
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <button type="submit">Login</button>
        </form>
      </>
    )
  }

}

export default Login;