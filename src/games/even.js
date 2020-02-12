import makeBrainGame from '..';
import randomNum from '../randomNum';

const isEven = (question) => question % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const gameEven = () => {
  const roundNumber = randomNum(1, 99);
  const correctAnswer = isEven(roundNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${roundNumber}`,
  };

  return result;
};

export default () => makeBrainGame(gameEven, description);
