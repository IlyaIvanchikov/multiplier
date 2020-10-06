import React from 'react';
import classes from './App.module.scss';
import Header from './container/header/header';
import Footer from './container/footer/footer';
import Main from './container/main/main';
import { makeExercises } from './components/exercisesLogic/makeExercises';

const App = () => {
  console.log(makeExercises(1, 2, 'divide'));
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
