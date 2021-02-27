import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import BlockPlayerHeader from './blockPlayerHeader/blockPlayerHeader';
import classes from './blockgame.module.scss';
import BlockAnswerIndicate from './blockAnswerIndicate';
import { Row } from 'react-bootstrap';
import CoinsIcon from '../../../../../resources/images/Coins.png';
import ArrowIcon from '../../../../../resources/images/Arrow.png';
import StopWatch from '../../../../../components/stopwatch/stopwatch';

type blockGameOpt = {
  exercises: any[];
  setNewExercises: any;
  numOfRounds: number;
  showScore: any;
  setResults: any;
  results: any;
  round: number;
  setRound: any;
  operation: string;
  viewScore: boolean;
};

const BlockGame = ({
  exercises,
  numOfRounds,
  showScore,
  setResults,
  results,
  round,
  setRound,
  operation,
  viewScore,
}: blockGameOpt) => {
  const answerRef = useRef<HTMLInputElement | null>(null);
  const numOfTerms = exercises[0].length;
  const [answerText, setAnswerText] = useState('');
  const [timer, setTimer] = useState('0');
  let rez: any;
  const [resultOfExercise, setResultOfExercise] = useState({
    isRightAnswer: true,
    isRoundComplete: false,
    isShow: false,
  });
  const isFloatResult =
    operation === 'Дробное деление' || operation === 'Квадрат числа'
      ? true
      : false;

  const handleTextField = (event: any) => {
    setAnswerText(event.target.value);
  };

  const handleSendAnswer = (event: any) => {
    /// остановить таймер
    rez = results;
    event.preventDefault();

    const isRightAnswer =
      +answerText === +exercises[round - 1][numOfTerms - 1] ? true : false;
    if (isRightAnswer) {
      rez.rightAnswers++;
    }

    if (!rez.roundsScore[round - 1]) {
      rez.roundsScore.push({ exercise: exercises[round - 1], answer: 0 });
      rez.AllTimers.push(timer);
    }
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
  };

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
  }, [resultOfExercise, results]);

  // Делает фокус на input
  useEffect(() => {
    if (typeof round === 'number') {
      answerRef.current?.focus();
    }
  });
  const computeSings = {
    Умножение: 'x',
    'Простое деление': '÷',
    'Дробное деление': '÷',
    'Квадрат числа': 'в квадрате',
    'Корень квадратный': 'квадратный корень',
    'Корень квадратный (проф.)': 'квадратный корень',
  };
  const OprationSign = () => (
    <Row className={classes.operationSign}>{computeSings[operation]}</Row>
  );
  return (
    <>
      <BlockPlayerHeader compute={operation} showScore={showScore} />
      <Row className={classes.gamefieldDisplayNumbers}>
        <BlockAnswerIndicate resultOfExercise={resultOfExercise} />
        <br />
        <p>{exercises[round - 1][0]}</p>
        {exercises[round - 1].length > 2 && <OprationSign />}
        {exercises[round - 1].length > 2 && <p>{exercises[round - 1][1]}</p>}
        {(operation === 'Корень квадратный' ||
          operation === 'Квадрат числа') && <br />}
      </Row>
      <Row className={classes.gameCounter}>{`${round}/${numOfRounds}`}</Row>
      {(operation === 'Корень квадратный'
      || operation === 'Квадрат числа'
      || operation === 'Корень квадратный (проф.)')
      && (
        <br />
      )}
      <Row className={classes.blockAnswer}>
        <form id="answerForm" onSubmit={handleSendAnswer}>
          <input
            onChange={handleTextField}
            step={isFloatResult ? 0.01 : 1}
            required={true}
            placeholder="Ответ:"
            value={answerText}
            type="number"
            ref={answerRef}
          />
          <button type="submit">
            <img src={ArrowIcon} alt="arrow" />
          </button>
        </form>
      </Row>
      {(operation === 'Корень квадратный' || operation === 'Квадрат числа') && (
        <br />
      )}
      <Row className={classes.coins}>
        <StopWatch
          setTimer={setTimer}
          clean={resultOfExercise.isShow}
          viewScore={viewScore}
        />
        <div>
          <span>{results.rightAnswers}</span>
          <img src={CoinsIcon} alt="coins" />
        </div>
      </Row>
    </>
  );
};

export default BlockGame;
