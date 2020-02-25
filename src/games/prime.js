import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const definePrimeNumber = () => {
  const randomNumber = randomNum(1, 99);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${randomNumber}`,
  };

  return result;
};

export default () => makeBrainGame(definePrimeNumber, description);
