const numberIndicator = '⠼';
const dash = '-';
const dot = '.';
const brailleDash = '⠤';
const brailleDot = '⠲';
const braille = ['⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊'];

export function parseBraille(str) {
  const negative = str[0] === brailleDash;
  str = str
    .slice(negative ? 2 : 1)
    .split('')
    .map(x => {
      const index = braille.indexOf(x);
      return x === brailleDot ? dot : index;
    })
    .join('');
  return parseFloat((negative ? dash : '') + str, 10);
}
export function toBraille(n) {
  const num = n
    .toString()
    .split('')
    .map(x => (x === dot ? brailleDot : braille[x] || ''))
    .join('');
  return `${n < 0 ? brailleDash : ''}${numberIndicator}${num}`;
}
