import React, { useContext } from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';
import { ParametersContext } from '../main-context';

const BlockPlay = () => {
  const { state } = useContext(ParametersContext);
  const {
    countGames,
    firstNumber,
    secondNumber,
    operation,
    isSound,
  } = state.gamesParameters;
  return (
    <>
      <Row className={classes.gameField}>
        <BlockOnePlayer
          countGames={countGames}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          operation={operation}
          isSound={isSound}
        />
      </Row>
    </>
  );
};

export default BlockPlay;
