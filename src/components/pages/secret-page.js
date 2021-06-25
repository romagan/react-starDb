import React from 'react';
import { Redirect } from 'react-router';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h2>Secret content for logged users</h2>
      </div>
    )
  }

  return (
    <Redirect to="login" />
  )
}

export default SecretPage;
