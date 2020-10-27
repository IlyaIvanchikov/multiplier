import { makeExercises } from './makeExercises';

export const generateNumber = (
  exercises: any,
  numOfRounds: number,
  digitsFirstTerm: any,
  digitsSecondTerm: any,
  computeType: string
) => {
  for (let i = 0; i < numOfRounds; i++) {
    exercises.push(makeExercises(digitsFirstTerm, digitsSecondTerm, numOfRounds, computeType));
  }
};
