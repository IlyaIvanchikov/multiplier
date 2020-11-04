import React, { useReducer, useState, useEffect } from 'react';
import { reducer, initialState } from './state/reducer';
import {
  ParametersContext,
  DispatchParametersContext,
  UsuallyContext,
} from './main-context';
import MainView from './main.view';

import { HandleParamsForm } from '../../ts/store';

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleShowSubmit = ({
    event,
    countGames,
    firstNumber,
    secondNumber,
    operation,
  }: HandleParamsForm) => {
    event.preventDefault();
    setLoading(true);
    dispatch({
      type: 'CREATE_PARAMETERS',
      gamesParameters: {
        countGames,
        firstNumber,
        secondNumber,
        operation,
      },
    });
    setShow(false);
  };

  const loaderTime = () => {
    return new Promise<string>((resolve: any) => setTimeout(resolve, 3000));
  };

  useEffect(() => {
    if (isLoading) {
      loaderTime().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <DispatchParametersContext.Provider value={{ dispatch }}>
      <ParametersContext.Provider value={{ state }}>
        <UsuallyContext.Provider
          value={{
            handleShowSubmit,
            setShow,
          }}
        >
          <MainView show={show} loading={isLoading} />
        </UsuallyContext.Provider>
      </ParametersContext.Provider>
    </DispatchParametersContext.Provider>
  );
};

export default Main;
