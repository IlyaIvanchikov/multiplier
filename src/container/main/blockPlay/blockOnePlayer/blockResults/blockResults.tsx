import React, { useContext } from 'react';
import classes from './blockresults.module.scss';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TableOfPlayerResults from './tableOfPlayerResults/tableOfPlayerResults';
import CloseIcon from '../../../../../resources/images/Close.png';
import ReturnIcon from '../../../../../resources/images/return.svg';
import { UsuallyContext, ParametersContext } from '../../../main-context';
import { UsuallyProps } from '../../../../../ts/store';
import soundVictory from '../../../../../resources/sounds/victory.mp3';

type BlockResProps = {
  showScore: any;
  results: any;
  setResults: any;
  round: number;
  setRound: any;
  setExercises: any;
  exercises: any;
};

const BlockResults = ({
  showScore,
  setResults,
  results,
  round,
  setRound,
  setExercises,
  exercises,
}: BlockResProps) => {
  const { setShow }: UsuallyProps = useContext(UsuallyContext);
  const gameScorePercent = (results.rightAnswers / results.countGames) * 100;
  let playAudio = false;
  const { state } = useContext(ParametersContext);
  const { isSound } = state.gamesParameters;

  if (results.countGames === results.rightAnswers && isSound) {
    playAudio = true;
  }
  return (
    <>
      <audio src={soundVictory} autoPlay={playAudio} />
      <Col className={classes.resultsBlock}>
        <Row className={classes.resultsHeader}>
          <Col className={classes.left} />
          <Col className={classes.resultsTitle}>
            <h5>Результаты</h5>
          </Col>
          <Col className={classes.right}>
            <button title="В главное меню" onClick={() => setShow(true)}>
              <img
                className={classes.resultsIcon}
                alt="main menu"
                src={ReturnIcon}
              />
            </button>
            <button
              title="Закрыть"
              onClick={() => {
                if (results.gameOver) {
                  setResults({
                    countGames: results.countGames,
                    rightAnswers: 0,
                    roundsScore: [],
                    allTimers: []
                  });
                  setRound(1);
                  setExercises(exercises);
                } else {
                  setRound(round);
                }
                showScore(false);
              }}
            >
              <img
                className={classes.resultsIcon}
                alt="Закрыть"
                src={CloseIcon}
              />
            </button>
          </Col>
        </Row>
        <Row className={classes.visualResults}>
          <span>Правильно:</span>
          <Col className={classes.visualResultsPogress}>
            <p className={classes.relResult}>
              {`${results.rightAnswers} из ${results.countGames} `}
            </p>
            <ProgressBar now={gameScorePercent} />
          </Col>
        </Row>
        <Row style={{ height: '60%' }}>
          <Col className={classes.tableOfResults}>
            <TableOfPlayerResults results={results.roundsScore} timers={results.AllTimers}/>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default BlockResults;
