import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9090/api'

axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem('jwt');

    return options;
  },
  function(err) {
    return Promise.reject(err);
  }
)

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('jwt');
      const notLoggedIn = <div>Whoops....<br />You'll need to log in to see that.</div>

      return (
        <>
          { token ? <Component {...this.props} /> : notLoggedIn }
        </>
      )
    }
  }
}