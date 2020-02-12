#!/usr/bin/env node
import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const makeCalculation = () => {
  const randomNumber1 = randomNum(1, 99);
  const randomNumber2 = randomNum(1, 99);
  const randomOperator = randomNum(0, operators.length - 1);
  let correctAnswer;
  switch (randomOperator) {
    case 0:
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case 1:
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case 2:
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default: correctAnswer = randomNumber1 + randomNumber2;
  }

  const result = {
    answer: correctAnswer.toString(),
    question: `${randomNumber1} ${operators[randomOperator]} ${randomNumber2}`,
  };

  return result;
};

export default () => makeBrainGame(makeCalculation, description);
