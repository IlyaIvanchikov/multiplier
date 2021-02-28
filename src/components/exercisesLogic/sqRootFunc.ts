import getRandomIntInclusive from './extraFunctions/getRandomIntInclusive';

const sqRootTerms = (actions: number, operation: string) => {
  const arrOfExc: any[] = [];
  for (let i = 0; i < actions; i++) {
    let term, result;
    if (operation !== 'Корень квадратный (проф.)') {
      result = getRandomIntInclusive(2, 100);
      term = result ** 2;
    } else {
      do {
        term = getRandomIntInclusive(2, 100000);
        result = Math.sqrt(term);
        // tslint:disable-next-line: no-bitwise
      } while ((result ^ 0) === result);
      result = result.toFixed(2);
    }
    arrOfExc.push([term, result]);
  }
  return arrOfExc;
};

export default sqRootTerms;
