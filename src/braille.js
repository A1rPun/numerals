import { createNumeral } from './common.js';

const numberIndicator = '⠼';
const negative = '-';
const dot = '.';
const brailleNegative = '⠤';
const brailleDot = '⠲';
const braille = ['⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊'];

function parseBraille(str) {
  const normalized = [...str];
  const isNegative = normalized[0] === brailleNegative;

  str = normalized
    .slice(isNegative ? 2 : 1)
    .map(x => {
      const index = braille.indexOf(x);
      return x === brailleDot ? dot : index;
    })
    .join('');
  return parseFloat((isNegative ? negative : '') + str, 10);
}

function toBraille(n) {
  const num = [...n.toString()]
    .map(x => (x === dot ? brailleDot : braille[x] || ''))
    .join('');
  return `${numberIndicator}${n < 0 ? brailleNegative : ''}${num}`;
}

export default createNumeral(parseBraille, toBraille);
