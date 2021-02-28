import getRandomIntInclusive from './extraFunctions/getRandomIntInclusive';

const sqRootTerms = (actions: number, operation: string) => {
  const arrOfExc: any[] = [];
  for (let i = 0; i < actions; i++) {
    let term;
    if (operation !== 'Корень квадратный (проф.)') {
      term = getRandomIntInclusive(2, 100) ** 2;
    } else {
      let result;
      do {
        term = getRandomIntInclusive(2, 100000);
        result = Math.sqrt(term);
        // tslint:disable-next-line: no-bitwise
      } while ((result ^ 0) === result);
    }
    arrOfExc.push([term, Math.sqrt(term)]);
  }
  return arrOfExc;
};

export default sqRootTerms;
