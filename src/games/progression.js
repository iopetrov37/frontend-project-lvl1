#!/usr/bin/env node
import brainGame from '..';
import randomNum from '../randomNum';

const description = 'What number is missing in the progression?';


const gameProgression = () => {
  const start = randomNum(1, 99);
  const stepSize = randomNum(1, 9);
  const hidePosition = randomNum(0, 9);
  const maxSteps = 10;
  const correctAnswer = start + stepSize * hidePosition;
  let progress = ' ';
  for (let countSteps = 0; countSteps < maxSteps; countSteps += 1) {
    const point = start + stepSize * countSteps;
    if (hidePosition === countSteps) {
      progress += '.. ';
    } else {
      progress += `${point} `;
    }
  }
  const result = {
    answer: correctAnswer.toString(),
    question: `${progress}`,
  };
  return result;
};

export default () => brainGame(gameProgression, description);
