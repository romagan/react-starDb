import React from 'react';
import { Redirect } from 'react-router';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) return <Redirect to="/secret" />

  return (
    <div className="jumbotron text-center">
      <p>Login Page</p>

      <button className="btn btn-success" onClick={ onLogin }>Login</button>
    </div>
  )
}

export default LoginPage;
