import brainGame from '..';
import randomNum from '../randomNum';

const isEven = (question) => question % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const gameEven = () => {
  const gameQuestion = randomNum(1, 99);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${gameQuestion}`,
  };

  return result;
};

export default () => brainGame(gameEven, description);
