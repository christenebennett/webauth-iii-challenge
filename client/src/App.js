import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Users from './users/Users';
import { NavLink, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp; | &nbsp;
            <button>Logout</button>
          </nav>
          <main>
            <Route path="/login" component={Login}/>
            <Route path="/users" component={Users}/>
          </main>
        </header>
      </div>
    );
  }
}

export default App;
