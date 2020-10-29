import React from 'react';
import { useState, useEffect } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader'
import classes from './blockgame.module.scss'
import BlockAnswerIndicate from './blockAnswerIndicate'
import { Row } from 'react-bootstrap'
import BlockTerm from './blockTerm'
import CoinsIcon from '../../../../../resources/images/Coins.png'
import ArrowIcon from '../../../../../resources/images/Arrow.png'


type blockGameOpt = {
  exercises: any[];
  setNewExercises: any;
  countGames: number;
  showScore: any;
  setResults: any;
  results: any;
  round: number;
  setRound: any;
  operation: string

};

const BlockGame = ({
  exercises,
  setNewExercises,
  countGames,
  showScore,
  setResults,
  results,
  round,
  setRound,
  operation
}: blockGameOpt) => {
    console.log(
      exercises,
      countGames,
      showScore,
      setResults,
      results,
      round,
      setRound
  )

  const timing = 1000
  const [term, setTerm] = useState([0, exercises[round - 1][0]]);
  const [resultOfExercise, setResultOfExercise] = useState({
    isRightAnswer: true,
    isRoundComplete: false,
    isShow: false,
  })

  useEffect(() => {
    setTimeout(() => {
      setRound(round + 1)
      setTerm([0, exercises[round][0]])
    }, 3000);
  }, [round])

  useEffect(() => {
    if (resultOfExercise.isShow && !results.gameOver) {
      setTimeout(() => {
        setResultOfExercise({
          isRightAnswer: true,
          isRoundComplete: false,
          isShow: false,
        });
      }, 3000);
    }
  }, [resultOfExercise]);



  return (
    <>
      <BlockPlayerHeader compute={operation} />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockAnswerIndicate resultOfExercise={resultOfExercise} />
        <BlockTerm
          timing={timing}
          numOfTerms={countGames - 1}
          term={term}
        />
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${countGames}`}</Row>
      <Row className={classes.blockAnswer}>
        <form id="answerForm" onSubmit={() => alert('Send Form')}>
          <input
            onChange={() => alert('Change Form')}
            style={ {backgroundColor: 'lightgrey'} }
            // disabled={disableInput}
            required={true}
            value={'answerText'}
            placeholder="Ответ:"
            type="number"
            // ref={answerRef}
          />
          <button type="submit">
            <img src={ArrowIcon} alt="arrow" />
          </button>
        </form>
      </Row>
      <Row className={classes.coins}>
        <span>{results.rightAnswers}</span>
        <img src={CoinsIcon} alt="coins" />
      </Row>
    </>
  );
};

export default BlockGame;
