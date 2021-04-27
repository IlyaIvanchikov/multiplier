import React from 'react';
import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
// import Main from './container/main/main';
import WpPosts from './components/wpConnect/wpPosts/wpPosts';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <WpPosts />
      <Footer />
    </div>
  );
};

export default App;
