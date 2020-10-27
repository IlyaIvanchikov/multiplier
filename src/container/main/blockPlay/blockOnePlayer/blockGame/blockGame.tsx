import React from 'react';
// import { useState, useEffect, useRef } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader'


type blockGameOpt = {
  exercises: any[];
  setNewExercises: any;
  countGames: number;
  showScore: any;
  setResults: any;
  results: any;
  round: number;
  setRound: any

};

const BlockGame = ({
  exercises,
  setNewExercises,
  countGames,
  showScore,
  setResults,
  results,
  round,
  setRound
}: blockGameOpt) => {
    console.log(
      exercises,
      setNewExercises,
      countGames,
      showScore,
      setResults,
      results,
      round,
      setRound
  )

  return (
    <>
      <BlockPlayerHeader />
    </>
  );
};

export default BlockGame;
