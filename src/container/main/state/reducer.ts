export interface StateType {
  gamesParameters: StateTypeItem;
}

export interface StateTypeItem {
  countGames: number;
  firstNumber: number;
  secondNumber: number;
  operation: string;
  isSound: boolean;
}

export type ActionType = {
  type: 'CREATE_PARAMETERS';
  gamesParameters: StateTypeItem;
};

export const initialState: StateType = {
  gamesParameters: {
    countGames: 10,
    firstNumber: 1,
    secondNumber: 1,
    operation: 'Умножение',
    isSound: false,
  },
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'CREATE_PARAMETERS': {
      state.gamesParameters = action.gamesParameters;
      return state;
    }
    default:
      throw new Error();
  }
};
