import React from 'react';

const wpAuthentication = (event) => {
  event.preventDefault();
  console.log('auth');
};

const AuthForm = () => {
  return (
    <div>
      <form onSubmit={wpAuthentication}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" value="Auth" />
      </form>
    </div>
  );
};

export default AuthForm;
