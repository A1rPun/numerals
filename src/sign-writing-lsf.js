import { createNumeral } from './common.js';

// Langue des Signes Française

const negative = '-';
const dot = '.';
const lsfNegative = '𝪈'; // TODO: right?
const lsfDot = '𝩷'; // TODO: right?
// TODO: 0
const signs = ['', '𝠀', '𝠎', '𝢇', '𝡄', '𝡌', '𝣆𝤯⦩', '𝣜𝤯⦩', '𝠞𝤯⦩', '𝢎𝤯⦩'];

function parseLsf(str) {
  const normalized = [...str];
  const isNegative = normalized[0] === lsfNegative;

  str = normalized
    .slice(isNegative ? 1 : 0)
    .map(x => x === lsfDot ? dot : signs.indexOf(x))
    .join('');
  return parseFloat((isNegative ? negative : '') + str, 10);
}

function toLsf(n) {
  const num = [...n.toString()]
    .map(x => (x === dot ? lsfDot : signs[x] || ''))
    .join('');
  return `${n < 0 ? lsfNegative : ''}${num}`;
}

export default createNumeral(parseLsf, toLsf);
