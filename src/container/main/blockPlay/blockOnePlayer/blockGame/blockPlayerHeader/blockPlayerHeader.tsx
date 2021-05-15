import React, { useContext } from 'react';
import classes from './blockplayerheader.module.scss';
import ResultsIcon from '../../../../../../resources/images/Results.png';
import { Row, Col } from 'react-bootstrap';
import ReturnIcon from '../../../../../../resources/images/return.svg';
import { UsuallyContext } from '../../../../main-context';
import { UsuallyProps } from '../../../../../../ts/store';

type blockGameHeaderOpt = {
  compute: string;
  showScore: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlockPlayerHeader = ({ compute, showScore }: blockGameHeaderOpt) => {
  const { setShow }: UsuallyProps = useContext(UsuallyContext);
  if (compute === 'Корень квадратный (проф.)') compute = 'Корень квадратный'
  return (
    <Row className={classes.playerHeader}>
      <Col className={classes.threePoints}>
        <button title="В главное меню" onClick={() => setShow(true)}>
          <img
            className={classes.resultsIcon}
            alt="main menu"
            src={ReturnIcon}
          />
        </button>
      </Col>
      <Col className={classes.playerTitle}>{compute}</Col>
      <Col className={classes.iconBlock}>
        <button title="Статистика" onClick={() => showScore(true)}>
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
