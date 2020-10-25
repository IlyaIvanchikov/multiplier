import React, { useContext } from 'react';
import classes from './blockplay.module.scss';
import BlockOnePlayer from './blockOnePlayer/blockOnePlayer';
import { Row } from 'react-bootstrap';
import { ParametersContext } from '../main-context';
// import { StateTypeItem } from '../state/reducer';

const BlockPlay = () => {
  const { state } = useContext(ParametersContext);
  const { countGames, firstNumber, secondNumber, operation } = state.gamesParameters;
  return (
    <>
      <Row className={classes.gameField}>
        <BlockOnePlayer
          countGames={countGames}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          operation={operation}
        />
      </Row>
    </>
  );
};

export default BlockPlay;
