import { createNumeral } from './common.js';

// Deutsche Gebärdensprache

const negative = '-';
const dot = '.';
const dgsNegative = '𝪈'; // TODO: right?
const dgsDot = '𝩷'; // TODO: right?
// TODO: distinct left and right hand
const signs = ['𝡌𝡌', '𝣆', '𝣜', '𝠞', '𝡄', '𝡌', '𝡌𝣆', '𝡌𝣜', '𝡌𝠞', '𝡌𝡄'];

function parseDgs(str) {
  const normalized = [...str];
  const isNegative = normalized[0] === dgsNegative;

  str = normalized
    .slice(isNegative ? 1 : 0)
    .map(x => x === dgsDot ? dot : signs.indexOf(x))
    .join('');
  return parseFloat((isNegative ? negative : '') + str, 10);
}

function toDgs(n) {
  const num = [...n.toString()]
    .map(x => (x === dot ? dgsDot : signs[x] || ''))
    .join('');
  return `${n < 0 ? dgsNegative : ''}${num}`;
}

export default createNumeral(parseDgs, toDgs);
