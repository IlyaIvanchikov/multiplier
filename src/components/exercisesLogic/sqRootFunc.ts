import getRandomIntInclusive from './extraFunctions/getRandomIntInclusive';

const minMax = (digit: number) => ({
  max: Math.pow(10, digit) - 1,
  min: digit === 1 ? 2 : Math.pow(10, digit - 1),
});

const sqRootTerms = (actions: number, operation: string, digits: number) => {
  const { min, max } = minMax(digits);
  const arrOfExc: any[] = [];

  for (let i = 0; i < actions; i++) {
    let term = getRandomIntInclusive(min, max);
    let result = Math.sqrt(term);
    if (operation === 'Корень квадратный (проф.)') {
      // tslint:disable-next-line: no-bitwise
      while ((result ^ 0) === result) {
        term = getRandomIntInclusive(min, max);
        result = Math.sqrt(term);
      }
    } else {
      // tslint:disable-next-line: no-bitwise
      while ((result ^ 0) !== result) {
        term = getRandomIntInclusive(min, max);
        result = Math.sqrt(term);
      }
    }

    arrOfExc.push([term, +result.toFixed(2)]);
  }
  return arrOfExc.sort(() => Math.random() - 0.5);
};

export default sqRootTerms;
