import { StateTypeItem } from './../container/main/state/reducer';
export interface TitleParameters {
  title: string;
  handleModalClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nameButton?: string;
}

export interface RangeParameters extends TitleParameters {
  min: number;
  max: number;
  currentParametersRange: number;
  step: number;
  setValueRange: React.Dispatch<React.SetStateAction<number>>;
}

export interface SubmitForm extends HandleSubmitForm {
  gamesParameters: StateTypeItem;
}
export interface HandleParamsForm {
  event: React.FormEvent<HTMLFormElement>;
  countGames: number;
  firstNumber: number;
  secondNumber: number;
  operation: string;
}
export interface HandleSubmitForm {
  handleSubmit: ({
    event,
    countGames,
    firstNumber,
    secondNumber,
    operation,
  }: HandleParamsForm) => void;
}

export interface SubmitFormView extends HandleSubmitForm {
  countGames: number;
  firstNumber: number;
  secondNumber: number;
  operation: string;
  setValueRangeFirstNumbers: React.Dispatch<React.SetStateAction<number>>;
  setValueRangeSecondNumbers: React.Dispatch<React.SetStateAction<number>>;
  setValueRangeCountGames: React.Dispatch<React.SetStateAction<number>>;
  setValueSelectOperation: React.Dispatch<React.SetStateAction<string>>;
}

export interface UsuallyProps {
  handleShowSubmit: ({
    event,
    countGames,
    firstNumber,
    secondNumber,
    operation,
  }: HandleParamsForm) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ButtonID {
  handleButtonClick: (item: string) => void;
}
