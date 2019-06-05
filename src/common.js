export function parseNumeral(str, numerals) {
  return +str
    .split('')
    .map(x => numerals.indexOf(x))
    .join('');
}
export function toNumeral(n, numerals) {
  return n
    .toString()
    .split('')
    .map(x => numerals[x])
    .join('');
}
