import makeBrainGame from '..';
import randomNum from '../randomNum';

const isEven = (question) => question % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const defineEvenNumber = () => {
  const question = randomNum(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: question.toString(),
  };

  return result;
};

export default () => makeBrainGame(defineEvenNumber, description);
