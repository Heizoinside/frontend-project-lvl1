import randomInteger from '../randomize';
import run from '..';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startNumber = 1;
const numbersRange = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if (num === divisor) return true;
    if (num % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};

const makeGameData = () => {
  const gameData = {
    question: randomInteger(startNumber, numbersRange),
  };
  gameData.correctAnswer = isPrime(gameData.question) ? 'yes' : 'no';
  return gameData;
};

export default () => run(makeGameData, message);
