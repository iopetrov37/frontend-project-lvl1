import readlineSync from 'readline-sync';

const gamesCount = 3;

const makeBrainGame = (gameCorrectAnswer, description) => {
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(description, '\n');
  for (let i = 0; i < gamesCount; i += 1) {
    const correctAnswer = gameCorrectAnswer();
    console.log(`Question: ${correctAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.answer) {
      console.log('Correct!');
    } else {
      console.log(`\n${answer} is wrong answer ;(. Correct answer was ${correctAnswer.answer}.`);
      console.log(`\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};


export default makeBrainGame;
