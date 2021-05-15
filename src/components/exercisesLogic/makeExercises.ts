import getRandomIntInclusive from './extraFunctions/getRandomIntInclusive';
import computeFunc from './computeFunc';
import sqaureTerms from './squareTerms';
import sqRootTerms from './sqRootFunc';

const minMax = (digit: number) => ({
  max: Math.pow(10, digit) - 1,
  min: digit === 1 ? 2 : Math.pow(10, digit - 1),
});

export const makeExercises = (
  digitsOne: number,
  digitsTwo: number,
  actions: number,
  compute: string
) => {
  const { min: minA, max: maxA } = minMax(digitsOne);
  const { min: minB, max: maxB } = minMax(digitsTwo);
  const arrOfExc: any[] = [];
  // если возведение в квадрат и число одноразрядное, то наполняем пример максимально неповторяющимися числами
  // и сразу возвращаем то, что нужно
  if (compute === 'Квадрат числа' && digitsOne === 1) {
    return sqaureTerms(actions);
    // отдельно считаем извлечение корня в функции sqRootTerms
  } else if (
    compute === 'Корень квадратный (проф.)' ||
    compute === 'Корень квадратный'
  ) {
    return sqRootTerms(actions, compute, digitsOne);
  }
  for (let i = 0; i < actions; i++) {
    let excercise: number[] = [];
    // создаем первое слагаемое/множитель...
    excercise.push(getRandomIntInclusive(minA, maxA));
    // если это не корень или квадат добавляем второе слагаемое/множитель/делитель...
    if (compute !== 'Квадрат числа') {
      excercise.push(getRandomIntInclusive(minB, maxB));
    }
    // при простом делении переставляем значения так, чтобы первое было больше, чтобы не было дробного результата
    if (compute === 'Простое деление') {
      excercise = excercise.sort((a, b) => b - a);
      // делаем так, чтобы результат не был дробным, подбирая значения
      while (
        excercise[0] % excercise[1] !== 0 ||
        excercise[0] === excercise[1]
      ) {
        excercise[0] = getRandomIntInclusive(minA, maxA);
        excercise[1] = getRandomIntInclusive(minB, maxB);
        excercise = excercise.sort((a, b) => b - a);
      }
    } else if (compute === 'Дробное деление') {
      // делаем, чтобы результат был дробным
      while (excercise[0] % excercise[1] === 0) {
        excercise[0] = getRandomIntInclusive(minA, maxA);
        excercise[1] = getRandomIntInclusive(minB, maxB);
      }
    }
    // считаем ответ округляя до сотых
    excercise.push(+computeFunc[compute](...excercise).toFixed(2));
    arrOfExc.push(excercise);
  }

  return arrOfExc;
};
