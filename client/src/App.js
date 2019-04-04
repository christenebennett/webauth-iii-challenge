import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Users from './users/Users';
import Signup from './signup/Signup';
import { NavLink, Route } from 'react-router-dom';

class App extends Component {

  onLogout(){
    console.log(`logout!`)
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/signin">Login</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/signup">Sign Up</NavLink>
            <button onClick={this.onLogout}>Logout</button>
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
}

export default App;
