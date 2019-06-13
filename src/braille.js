const numberIndicator = '⠼';
const negative = '-';
const dot = '.';
const brailleNegative = '⠤';
const brailleDot = '⠲';
const braille = ['⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊'];

export function parseBraille(str) {
  const isNegative = str[0] === brailleNegative;
  str = str
    .slice(isNegative ? 2 : 1)
    .split('')
    .map(x => {
      const index = braille.indexOf(x);
      return x === brailleDot ? dot : index;
    })
    .join('');
  return parseFloat((isNegative ? negative : '') + str, 10);
}
export function toBraille(n) {
  const num = n
    .toString()
    .split('')
    .map(x => (x === dot ? brailleDot : braille[x] || ''))
    .join('');
  return `${n < 0 ? brailleNegative : ''}${numberIndicator}${num}`;
}
