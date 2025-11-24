import { createNumeral } from './common.js';

// British/Australian/New Zealand Sign Language

const negative = '-';
const dot = '.';
const aslNegative = '𝪈'; // TODO: right?
const aslDot = '𝩷'; // TODO: right?
// TODO: 6,7,8,9 rotate 45degree angle left
const signs = ['◑', '𝠀', '𝠎', '𝠞', '𝡄', '𝡌', '𝣸⦩', '𝣜⦩', '𝠞⦩', '𝢎⦩'];

function parseAsl(str) {
  const normalized = [...str];
  const isNegative = normalized[0] === aslNegative;

  str = normalized
    .slice(isNegative ? 1 : 0)
    .map(x => x === aslDot ? dot : signs.indexOf(x))
    .join('');
  return parseFloat((isNegative ? negative : '') + str, 10);
}

function toAsl(n) {
  const num = [...n.toString()]
    .map(x => (x === dot ? aslDot : signs[x] || ''))
    .join('');
  return `${n < 0 ? aslNegative : ''}${num}`;
}

export default createNumeral(parseAsl, toAsl);
