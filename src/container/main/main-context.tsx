import React from 'react';
import { UsuallyProps } from './../../ts/store';
import { StateType, ActionType, initialState } from './state/reducer';

export const ParametersContext = React.createContext<{
  state: StateType;
}>({
  state: initialState,
});

export const UsuallyContext = React.createContext<UsuallyProps>({
  handleShowSubmit: () => {},
  setShow: () => {},
});

export const DispatchParametersContext = React.createContext<{
  dispatch: (action: ActionType) => void;
}>({
  dispatch: () => {},
});
