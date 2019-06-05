const roman = [
  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // ones
  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // tens
  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // hundreds
];

export function parseRoman(str) {
  const sortLength = (a, b) => b.length - a.length;
  const numeral = roman.reduce((acc, x) => {
    const check = x.filter(y => ~str.indexOf(y)).sort(sortLength)[0];
    if (check) str = str.slice(0, -check.length);
    return x.indexOf(check) + acc;
  }, '');
  return parseInt(numeral, 10) + str.match(/^M*/)[0].length * 1000;
}
export function toRoman(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < roman.length ? roman[i][x] : 'M'.repeat(x)) + acc, '');
}
