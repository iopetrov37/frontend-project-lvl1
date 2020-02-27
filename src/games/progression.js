import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameData = () => {
  const start = randomNum(1, 99);
  const stepSize = randomNum(1, 9);
  const hidePosition = randomNum(0, progressionLength - 1);
  const correctAnswer = start + stepSize * hidePosition;
  const replacementSymbol = '..';
  const numbers = [];

  for (let i = 0; i < progressionLength; i += 1) {
    numbers[i] = start + stepSize * i;
    if (hidePosition === i) {
      numbers[i] = `${replacementSymbol}`;
    }
  }
  const question = numbers.join(' ');
  const result = {
    answer: correctAnswer.toString(),
    question: `${question}`,
  };
  return result;
};

export default () => makeBrainGame(generateGameData, description);
