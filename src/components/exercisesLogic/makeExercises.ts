import getRandomIntInclusive from './extraFunctions/getRandomIntInclusive';

const minMax = (digit: number) => ({
  max: Math.pow(10, digit) - 1,
  min: digit === 1 ? 2 : Math.pow(10, digit - 1),
});

const computeFunc = {
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
  pow: (a: number) => a ** 2,
  sqrt: (a: number) => Math.sqrt(a),
};

export const makeExercises = (
  digits: number,
  actions: number,
  compute: string
) => {
  const { min, max } = minMax(digits);
  let arrOfExc: any[] = [];
  for (let i = 0; i < actions; i++) {
    const excercise: number[] = [];
    excercise.push(getRandomIntInclusive(min, max));
    if (compute !== 'pow' && compute !== 'sqrt')
      excercise.push(getRandomIntInclusive(min, max));
      if (compute === 'divide') excercise.sort().reverse()
    // считаем ответ
    excercise.push(+computeFunc[compute](...excercise).toFixed(2));
    arrOfExc.push(excercise);
  }

  return arrOfExc;
};
