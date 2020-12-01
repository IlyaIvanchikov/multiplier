import getRandomIntInclusive from './extraFunctions/getRandomIntInclusive';

const minMax = (digit: number) => ({
  max: Math.pow(10, digit) - 1,
  min: digit === 1 ? 2 : Math.pow(10, digit - 1),
});

const computeFunc = {
  'Умножение': (a: number, b: number) => a * b,
  'Простое деление': (a: number, b: number) => a / b,
  'Дробное деление': (a: number, b: number) => a / b,
  'Квадрат числа': (a: number) => a ** 2,
  'Корень квадратный': (a: number) => Math.sqrt(a),
};

export const makeExercises = (
  digitsOne: number,
  digitsTwo: number,
  actions: number,
  compute: string
) => {
  const { min: minA, max: maxA } = minMax(digitsOne);
  const { min: minB, max: maxB } = minMax(digitsTwo);
  const arrOfExc: any[] = [];
  for (let i = 0; i < actions; i++) {
    let excercise: number[] = [];
    excercise.push(getRandomIntInclusive(minA, maxA));
    if (compute !== 'Квадрат числа' && compute !== 'Корень квадратный') {
      excercise.push(getRandomIntInclusive(minB, maxB));
    }
    if (compute === 'Простое деление') {
      excercise = excercise.sort((a, b) => b - a);
      while (
        excercise[0] % excercise[1] !== 0 ||
        excercise[0] === excercise[1]
      ) {
        excercise[0] = getRandomIntInclusive(minA, maxA);
        excercise[1] = getRandomIntInclusive(minB, maxB);
        excercise = excercise.sort((a, b) => b - a);
      }
    }
    // считаем ответ
    excercise.push(+computeFunc[compute](...excercise).toFixed(2));
    arrOfExc.push(excercise);
  }

  return arrOfExc;
};
