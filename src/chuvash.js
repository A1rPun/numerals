import { createNumeral } from './common.js';

const chuvash = [
  ['', 'I', 'II', 'III', 'IIII', '/', 'I/', 'II/', 'III/', 'IIII/'], // ones
  ['', 'X', 'XX', 'XXX', 'XXXX', '𐠂', 'X𐠂', 'XX𐠂', 'XXX𐠂', 'XXXX𐠂'], // tens
  ['', '𐠀', '𐠀𐠀', '𐠀𐠀𐠀', '𐠀𐠀𐠀𐠀', '𐠁', '𐠁𐠀', '𐠁𐠀𐠀', '𐠁𐠀𐠀𐠀', '𐠁𐠀𐠀𐠀𐠀'], // hundreds
];

function parseChuvash(str) {
  throw Error('Not implemented');
}

function toChuvash(n) {
  return [...n.toString()]
    .reverse()
    .reduce((acc, x, i) => acc + (i < chuvash.length ? chuvash[i][x] : '✳'.repeat(x)), '');
}

export default createNumeral(parseChuvash, toChuvash);
