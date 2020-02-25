import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const findMissingNumber = () => {
  const start = randomNum(1, 99);
  const stepSize = randomNum(1, 9);
  const hidePosition = randomNum(0, progressionLength - 1);
  const correctAnswer = start + stepSize * hidePosition;
  const replacementSymbol = '..';
  let question = `${start}`;
  for (let i = 1; i < progressionLength; i += 1) {
    const point = start + stepSize * i;
    if (hidePosition === i) {
      question = `${question} ${replacementSymbol}`;
    } else {
      question = `${question} ${point}`;
    }
  }
  const result = {
    answer: correctAnswer.toString(),
    question: `${question}`,
  };
  return result;
};

export default () => makeBrainGame(findMissingNumber, description);
