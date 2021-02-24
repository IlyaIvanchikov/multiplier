import computeFunc from './computeFunc';
import shuffle from './extraFunctions/shuffleArr';

const sqaureTerms = (actions: number) => {
  const arrOfExc: any[] = [];
  const nums = [2, 3, 4, 5, 6, 7, 8, 9];
  let terms = shuffle(nums);
  if (actions <= terms.length) {
    terms = terms.slice(-actions);
  } else {
    const remnant = actions % terms.length;
    const arr = [];
    for (const e of nums) {
      arr.push(e);
    }
    if (remnant !== 0) {
      // если действий больше чем чисел, то нам нужно добавить к массиву чисел, количество рандомных чисел равных остатку от деления
      terms = terms.concat(shuffle(arr).slice(-remnant));
    }
    const numOfArr = Math.floor(actions / nums.length);
    for (let i = 1; i < numOfArr; i++) {
      terms = terms.concat(shuffle(arr));
    }
  }
  // формируем массив упражнений
  for (let i = 0; i < actions; i++) {
    let term: number;
    term = terms[i];
    const result = +computeFunc['Квадрат числа'](term);
    arrOfExc.push([term, result]);
  }
  return arrOfExc;
};

export default sqaureTerms;
