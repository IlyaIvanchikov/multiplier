import React, { useState } from 'react';
import ParametersView from './parameters.view';
import { SubmitForm } from '../../ts/store';
import { StateTypeItem } from '../../container/main/state/reducer';

const Parameters = ({ handleSubmit, gamesParameters }: SubmitForm) => {
  const {
    countGames,
    firstNumber,
    secondNumber,
    operation,
    isSound,
  }: StateTypeItem = gamesParameters;
  const [showOperation, setShowOperation] = useState<boolean>(false);

  const [valueRangeCountGames, setValueRangeCountGames] = useState<number>(
    countGames
  );
  const [valueRangeFirstNumbers, setValueRangeFirstNumbers] = useState<number>(
    firstNumber
  );
  const [valueRangeSecondNumber, setValueRangeSecondNumbers] = useState<number>(
    secondNumber
  );
  const [valueSelectOperation, setValueSelectOperation] = useState<string>(
    operation
  );
  const [checkIsSound, setCheckIsSound] = useState<boolean>(isSound);
  const handleModalOperationClick = () => {
    setShowOperation(true);
  };
  const handleCloseModalOperationClick = () => setShowOperation(false);

  const handleChooseModalOperationClick = () => {
    setShowOperation(false);
  };

  return (
    <ParametersView
      countGames={valueRangeCountGames}
      setValueRangeCountGames={setValueRangeCountGames}
      firstNumber={valueRangeFirstNumbers}
      setValueRangeFirstNumbers={setValueRangeFirstNumbers}
      secondNumber={valueRangeSecondNumber}
      setValueRangeSecondNumbers={setValueRangeSecondNumbers}
      operation={valueSelectOperation}
      isSound={checkIsSound}
      setCheckIsSound={setCheckIsSound}
      setValueSelectOperation={setValueSelectOperation}
      showOperation={showOperation}
      handleModalOperationClick={handleModalOperationClick}
      handleCloseModalOperationClick={handleCloseModalOperationClick}
      handleChooseModalOperationClick={handleChooseModalOperationClick}
      handleSubmit={handleSubmit}
    />
  );
};

export default Parameters;
