import { createNumeral } from './common.js';

const morse = [
  '-----',
  '.----',
  '..---',
  '...--',
  '....-',
  '.....',
  '-....',
  '--...',
  '---..',
  '----.',
];

const dot = '.';
const dotMorse = '.-.-.-';

function parseMorse(str) {
  const num = str
    .split(' ')
    .map(x => x === dotMorse ? dot : morse.indexOf(x))
    .join('');

  return parseFloat(num, 10);
}

function toMorse(n) {
  return [...n.toString()]
    .map(x => x === dot ? dotMorse : morse[x])
    .join(' ');
}

export default createNumeral(parseMorse, toMorse);
