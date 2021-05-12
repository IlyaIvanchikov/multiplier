import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
// import WpPosts from './components/wpConnect/wpPosts/wpPosts';
import Auth from './components/auth/auth';
import React, { useState } from 'react';

const App = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const token = localStorage.getItem('token');
  
  if (token && !auth) {
    setAuth(true);
  }

  return (
    <div className={classes.wrapper}>
      <Header name={name} />
      {auth && <Main />}
      {!auth && <Auth setAuth={setAuth} setName={setName} />}
      <Footer />
    </div>
  );
};

export default App;
