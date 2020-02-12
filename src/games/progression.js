#!/usr/bin/env node
import makeBrainGame from '..';
import randomNum from '../randomNum';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const gameProgression = () => {
  const start = randomNum(1, 99);
  const stepSize = randomNum(1, 9);
  const hidePosition = randomNum(0, progressionLength - 1);
  const correctAnswer = start + stepSize * hidePosition;
  const hideSymbol = '..';
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const point = start + stepSize * i;
    if (hidePosition === i) {
      progression += `${hideSymbol} `;
    } else {
      progression += `${point} `;
    }
  }
  const result = {
    answer: correctAnswer.toString(),
    question: `${progression}`,
  };
  return result;
};

export default () => makeBrainGame(gameProgression, description);
