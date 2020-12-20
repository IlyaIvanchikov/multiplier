import React, { useContext } from 'react';
import classes from './onerow.module.scss';
import { ParametersContext } from '../../../../main-context';

const exerciseString: any = (arrOfNumbers: any, computeType: string) => {
  const computeSings = {
    'Умножение': 'x',
    'Простое деление': '/',
    'Дробное деление': '/',
    'Квадрат числа': 'в квадрате',
    'Корень квадратный': 'квадратный корень',
  };
  const string = `${arrOfNumbers[0]} ${computeSings[computeType]} ${
    arrOfNumbers.length > 2 ? arrOfNumbers[1] : ''
  }`;

  return string;
};

const OneRowOfTable = (props: any) => {
  const { state } = useContext(ParametersContext);
  const { operation } = state.gamesParameters;
  const { exercises, number } = props;
  const { exercise, answer } = exercises;
  const rightAnswer = exercise[exercise.length - 1];
  const isRightAnswer = () => (answer === rightAnswer ? true : false);

  return (
    <tr>
      <td>{number}</td>
      <td>{exerciseString(exercise, operation)}</td>
      <td>
        {isRightAnswer() ? (
          <span className={classes.rightAnswer}>&#10004; {answer}</span>
        ) : (
          <span>&#10008; {answer}</span>
        )}
      </td>
      <td>{rightAnswer}</td>
    </tr>
  );
};

export default OneRowOfTable;
