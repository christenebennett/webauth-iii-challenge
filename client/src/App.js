import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Users from './users/Users';
import Signup from './signup/Signup';
import { NavLink, Route, withRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink className="navlink navitem" to="/signin">Login</NavLink>
            &nbsp; | &nbsp;
            <NavLink className="navlink navitem" to="/users">Users</NavLink>
            &nbsp; | &nbsp;
            <NavLink className="navlink navitem" to="/signup">Sign Up</NavLink>
            <br />
            <button className="btn-logout navitem" onClick={this.onLogout}>Logout</button>
          </nav>
          <main>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Login}/>
            <Route path="/users" component={Users}/>
          </main>
        </header>
      </div>
    );
  }
  onLogout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  }
}

export default withRouter(App);
