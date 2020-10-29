import React from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';

type blockGameHeaderOpt = {
  compute: string
};

const BlockPlayerHeader = ({
  compute
}: blockGameHeaderOpt) => {
  
  return (
    <Row className={classes.playerHeader}>

      <Col className={classes.threePoints}>
          <button
            title="Настройки"
            onClick={() => alert('OK')}
            className={classes.col__buttonSettings}
          >
            &bull; &bull; &bull;
          </button>

      </Col>
      <Col className={classes.playerTitle}>{compute}</Col>
      <Col className={classes.iconBlock}>
          <button title="Статистика" onClick={() => alert('OK')}>
            <img
              className={classes.resultsIcon}
              alt="Results"
              src={ResultsIcon}
            />
          </button>
      </Col>
    </Row>
  );
};

export default BlockPlayerHeader;
