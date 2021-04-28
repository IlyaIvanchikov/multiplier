import axios from 'axios';
import React, { useState } from 'react';

const AuthForm = ({ siteUrl }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  if (token && !localStorage.getItem('token')) {
    localStorage.setItem('token', token);
    setIsLogged(true);
  } else if (localStorage.getItem('token')) {
    axios
      .get(`${siteUrl}/wp-json/wp/v2/users/me?context=edit`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setIsLogged(true);
        }
        localStorage.setItem('user', `${username} ${res.data.id}`);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.warn(err);
        localStorage.removeItem('token');
        setLoading(false);
      });
  } else {
    if (loading) setLoading(false);
  }

  const wpAuthentication = (event) => {
    event.preventDefault();
    const loginData = { username, password };
    axios
      .post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
      .then((res) => {
        if (res.data.token) {
          console.log(res.data);
          setToken(res.data.token);
        }
      })
      .catch((err) => {
        console.warn(err);
        alert('Wrong password or username');
      });
  };

  return (
    <div>
      {!loading && !isLogged && (
        <form onSubmit={wpAuthentication}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            required={true}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required={true}
          />
          <input type="submit" value="Auth" />
        </form>
      )}
    </div>
  );
};

export default AuthForm;
