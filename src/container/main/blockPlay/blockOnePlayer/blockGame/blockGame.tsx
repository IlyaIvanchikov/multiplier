import React from 'react';
import { useState, useEffect } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader'
import classes from './blockgame.module.scss'
import BlockAnswerIndicate from './blockAnswerIndicate'
import { Row } from 'react-bootstrap'
// import BlockTerm from './blockTerm'
import CoinsIcon from '../../../../../resources/images/Coins.png'
import ArrowIcon from '../../../../../resources/images/Arrow.png'


type blockGameOpt = {
  exercises: any[];
  setNewExercises: any;
  numOfRounds: number;
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
  numOfRounds,
  showScore,
  setResults,
  results,
  round,
  setRound,
  operation
}: blockGameOpt) => {
  console.log('ReZ' ,results)

  // const timing = 2000
  // const [term, setTerm] = useState([0, exercises[round - 1][0]]);
  const numOfTerms = exercises[0].length;
  // const delayTermApear = 200;
  // const [disableInput, setDisableInput] = useState(true);
  const [answerText, setAnswerText] = useState('');
  let rez: any;
  const [resultOfExercise, setResultOfExercise] = useState({
    isRightAnswer: true,
    isRoundComplete: false,
    isShow: false,
  })

  const handleTextField = (event: any) => {
    setAnswerText(event.target.value);
  };

  const handleSendAnswer = (event: any) => {
    rez = results
    event.preventDefault()

    const isRightAnswer = +answerText === +exercises[round - 1][numOfTerms - 1]
      ? true
      : false
    if (isRightAnswer) rez.rightAnswers++

    if (!rez.roundsScore[round - 1])
      rez.roundsScore.push({ exercise: exercises[round - 1], answer: 0 });
    if (round < numOfRounds) {
      rez.roundsScore[round - 1].answer = +answerText;
      setResultOfExercise({
        isRightAnswer,
        isRoundComplete: false,
        isShow: true,
      });
      setTimeout(() => {
        setRound(round + 1);
      }, 3000);
    } else {
      rez.roundsScore[round - 1].answer = +answerText;
      setResultOfExercise({
        isRightAnswer,
        isRoundComplete: true,
        isShow: true,
      });
      rez.gameOver = 1;
      setTimeout(() => {
        setResults(rez);
        showScore(true);
      }, 2000);
    }
    setAnswerText('');
    // setDisableInput(true);
  }

  // useEffect(() => {
  //   if (term[0] < numOfTerms - 1) {
  //     setTimeout(() => {
  //       setTerm([term[0] + 1, exercises[round - 1][term[0] + 1]]);
  //     }, timing + delayTermApear - 50);
  //   } else if (term[0] !== 100) {
  //     setTerm([100, '???']);
  //     // setDisableInput(false);
  //   }
  // }, [round, term])

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
        <p>{exercises[round-1][0]}</p>
        {exercises[round - 1].length > 2 && <hr />}
        {exercises[round - 1].length > 2 && <p>{exercises[round-1][1]}</p>}
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${numOfRounds}`}</Row>
      <Row className={classes.blockAnswer}>
        <form id="answerForm" onSubmit={handleSendAnswer}>
          <input
            onChange={handleTextField}
            // style={disableInput ? { backgroundColor: 'lightgrey' } : {}}
            // disabled={disableInput}
            required={true}
            placeholder="Ответ:"
            value={answerText}
            type="number"
          />
          <button
            type="submit"
            // disabled={disableInput}
            >
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
