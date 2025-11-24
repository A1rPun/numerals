import { createNumeral } from './common.js';

// Brazilian Sign Language
// Source: https://geocachinginfo.nl/signwriting-br/
// Source: https://en.wikipedia.org/wiki/Sutton_SignWriting_(Unicode_block)

const negative = '-';
const dot = '.';
const librasNegative = '𝪈'; // TODO: right?
const librasDot = '𝩷'; // TODO: right?
// TODO: Fix 6, 7 (missing black white square diacritic), 8 (missing/wrong diacritic) & 9 (missing diacritic)
const signs = ['𝡶', '𝠀', '𝠎', '𝢆', '𝡄', '𝠐', '𝡵/', '𝣳', '𝤄𝪛𝦇', '𝡶/'];

function parseLibras(str) {
  const normalized = [...str];
  const isNegative = normalized[0] === librasNegative;

  str = normalized
    .slice(isNegative ? 1 : 0)
    .map(x => x === librasDot ? dot : signs.indexOf(x))
    .join('');
  return parseFloat((isNegative ? negative : '') + str, 10);
}

function toLibras(n) {
  const num = [...n.toString()]
    .map(x => (x === dot ? librasDot : signs[x] || ''))
    .join('');
  return `${n < 0 ? librasNegative : ''}${num}`;
}

export default createNumeral(parseLibras, toLibras);
