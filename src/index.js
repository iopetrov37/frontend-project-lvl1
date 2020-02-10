import readlineSync from 'readline-sync';

const maxGames = 3;

const brainGame = (gameCorrectAnswer, description) => {
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(description, '\n');
  for (let countGames = 0; countGames < maxGames; countGames += 1) {
    const correctAnswer = gameCorrectAnswer();
    console.log(`Question: ${correctAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.answer) {
      console.log('Correct!');
    } else {
      console.log(`\n${answer} is wrong answer ;(. Correct answer was ${correctAnswer.answer}.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};


export default brainGame;
