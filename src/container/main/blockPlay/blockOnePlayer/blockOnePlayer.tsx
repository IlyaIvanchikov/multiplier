import React, { useState } from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import { StateTypeItem } from '../../state/reducer';
// import BlockGame from './blockGame/blockGame';
import BlockResults from './blockResults/blockResults';
import { generateNumber } from '../../../../components/exercisesLogic/generateNumber';

const BlockOnePlayer = ({
  countGames,
  firstNumber,
  secondNumber,
  operation,
}: StateTypeItem) => {
  const [viewScore, setViewScore] = useState(false);
  const [round, setRound] = useState(1);
  const [results, setResults] = useState<any>({
    countGames,
    rightAnswers: 0,
    roundsScore: [],
  });

  const exercises: any = [];

  // ЗДЕСЬ ПЕРЕДАЛ В ТВОЮ ФУНКЦИЮ ВСЕ ВОЗМОЖНЫЕ ДАННЫЕ С ПАРАМЕТРОВ
  generateNumber(exercises, countGames, firstNumber, secondNumber, operation);

  const [newExercises, setNewExercises] = useState(exercises);

  console.log(newExercises);

  return (
    <Col className={classes.onePlayerField}>
      {
        viewScore ? (
          <BlockResults
            results={results}
            setResults={setResults}
            showScore={setViewScore}
            setExercises={setNewExercises}
            setRound={setRound}
            round={round}
            exercises={exercises}
          />
        ) : null
        // <BlockGame
        //     exercises={newExercises}
        //     setNewExercises={setNewExercises}
        //     countGames={countGames}
        //     showScore={setViewScore}
        //     setResults={setResults}
        //     results={results}
        //     round={round}
        //     setRound={setRound}
        // />
      }
    </Col>
  );
};

export default BlockOnePlayer;
