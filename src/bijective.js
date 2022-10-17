import { createNumeral } from './common.js';

function parseBijective(str) {
  return str
    .split('')
    .reverse()
    .reduce((acc, x, i) => acc + (parseInt(x, 36) - 9) * 26 ** i, 0);
}

function toBijective(n) {
  return (
    (n > 26 ? toBijective(Math.floor((n - 1) / 26)) : '') +
    ((n % 26 || 26) + 9).toString(36).toUpperCase()
  );
}

export default createNumeral(parseBijective, toBijective);
