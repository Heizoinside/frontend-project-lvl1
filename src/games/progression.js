import randomInteger from '../randomize';
import run from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (start, step, length) => {
  const iter = (elem, progression) => {
    if (progression.length === length) {
      return progression;
    }
    return iter(elem + step, progression.concat(elem));
  };
  return iter(start, []);
};

const makeGameData = () => {
  const start = randomInteger(1, 100);
  const step = 2;
  const progression = makeProgression(start, step, progressionLength);
  const hiddenIndex = randomInteger(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  const question = progression.map(element => (element === correctAnswer ? '..' : element)).join(' ');
  return {
    correctAnswer: correctAnswer.toString(),
    question,
  };
};

export default () => run(makeGameData, description);
