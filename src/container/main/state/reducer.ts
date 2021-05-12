export interface StateType {
  gamesParameters: StateTypeItem;
  localParameters: StateTypeItemLocal;
}

export interface StateTypeItem {
  countGames: number;
  firstNumber: number;
  secondNumber: number;
  operation: string;
  isSound: boolean;
}

export interface StateTypeItemLocal {
  token: string;
  name?: string;
}

export type ActionType =
  | {
      type: 'CREATE_PARAMETERS';
      gamesParameters: StateTypeItem;
    }
  | { type: 'CREATE_LOCAL_DATA'; localParameters: StateTypeItemLocal };

export const initialState: StateType = {
  gamesParameters: {
    countGames: 10,
    firstNumber: 1,
    secondNumber: 1,
    operation: 'Умножение',
    isSound: false,
  },
  localParameters: {
    token: '',
    name: '',
  },
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'CREATE_PARAMETERS': {
      state.gamesParameters = action.gamesParameters;
      return state;
    }
    case 'CREATE_LOCAL_DATA': {
      state.localParameters = action.localParameters;
      return state;
    }
    default:
      throw new Error();
  }
};
