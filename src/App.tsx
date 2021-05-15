import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
import Auth from './components/auth/auth';
import React, { useState } from 'react';
import Loader from './components/loader/loader';

const App = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorAuth, setErrorAuth] = useState<boolean>(false);
  const token = localStorage.getItem('token');
  if (token && !auth) {
    setAuth(true);
  }

  return (
    <div className={classes.wrapper}>
      <Header setAuth={setAuth} setErrorAuth={setErrorAuth} />
      {/* {errorAuth ? setShowModal(true)} */}
      {!auth && isLoading && (
        <div className={classes.loader}>
          <Loader state="axios" />
        </div>
      )}
      {auth && <Main />}
      {!auth && !isLoading && (
        <Auth
          setAuth={setAuth}
          setIsLoading={setIsLoading}
          setErrorAuth={setErrorAuth}
          errorAuth={errorAuth}
          isLoading={isLoading}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
