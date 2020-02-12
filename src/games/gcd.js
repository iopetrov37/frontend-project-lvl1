#!/usr/bin/env node
import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  const num3 = num1 % num2;
  return findGcd(num2, num3);
};

const gameGcd = () => {
  const randomNumber1 = randomNum(1, 99);
  const randomNumber2 = randomNum(1, 99);
  const result = {
    answer: findGcd(randomNumber1, randomNumber2).toString(),
    question: `${randomNumber1} ${randomNumber2}`,
  };

  return result;
};

export default () => makeBrainGame(gameGcd, description);
