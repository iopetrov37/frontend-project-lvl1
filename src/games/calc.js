import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const makeRandomOperator = (arrayOfOperators) => {
  const index = randomNum(0, arrayOfOperators.length - 1);
  return operators[index];
};

const makeCalculation = () => {
  const randomNumber1 = randomNum(1, 99);
  const randomNumber2 = randomNum(1, 99);
  const randomOperator = makeRandomOperator(operators);
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default: correctAnswer = randomNumber1 + randomNumber2;
  }

  const result = {
    answer: correctAnswer.toString(),
    question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
  };

  return result;
};

export default () => makeBrainGame(makeCalculation, description);
