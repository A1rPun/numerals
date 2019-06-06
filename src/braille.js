const numberIndicator = '⠼';
const dot = '.';
const brailleDot = '⠲';
const braille = ['⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊'];
// const dash = '⠤'

export function parseBraille(str) {
  return str
    .split('')
    .map(x => {
      const index = braille.indexOf(x);
      return ~index ? index : x === brailleDot ? dot : '';
    })
    .join('');
}
export function toBraille(n) {
  const num = n
    .toString()
    .split('')
    .map(x => (x === dot ? brailleDot : braille[x]))
    .join('');
  return `${numberIndicator}${num}`;
}
