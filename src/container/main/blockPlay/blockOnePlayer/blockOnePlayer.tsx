import React, { useState } from 'react';
import classes from './blockoneplayer.module.scss';
import { Col } from 'react-bootstrap';
import { StateTypeItem } from '../../state/reducer';
import BlockGame from './blockGame/blockGame';
import BlockResults from './blockResults/blockResults';
import { makeExercises } from '../../../../components/exercisesLogic/makeExercises';
import cat from '../../../../resources/images/cat.gif';
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

  const exercises = makeExercises(
    firstNumber,
    secondNumber,
    countGames,
    operation
  );

  const [newExercises, setNewExercises] = useState(exercises);

  return (
    <>
      {countGames === results.rightAnswers && (
        <Col lg={5} className="d-none d-lg-block">
          <img src={cat} alt="cat" />
        </Col>
      )}

      <Col className={classes.onePlayerField}>
        {viewScore ? (
          <BlockResults
            results={results}
            setResults={setResults}
            showScore={setViewScore}
            setExercises={setNewExercises}
            setRound={setRound}
            round={round}
            exercises={exercises}
          />
        ) : (
          <BlockGame
            exercises={newExercises}
            setNewExercises={setNewExercises}
            numOfRounds={countGames}
            showScore={setViewScore}
            setResults={setResults}
            results={results}
            round={round}
            setRound={setRound}
            operation={operation}
          />
        )}
      </Col>
    </>
  );
};

export default BlockOnePlayer;
