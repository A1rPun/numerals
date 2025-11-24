import { createNumeral } from './common.js';

const zero = ' ';
const baby = [
  ['', '𒐕', '𒐖', '𒐈', '𒐉', '𒐊', '𒐋', '𒑂', '𒑄', '𒑆'],
  ['', '𒌋', '𒎙', '𒌍', '𒑩', '𒑪'],
];
const sexagesimal = 60;

function parseBaby(c) {
  if (c === zero) return 0;
  const ones = baby[0].indexOf(c);
  return ~ones ? ones : baby[1].indexOf(c) * 10;
}

function parseBabylonian(str) {
  return [...str]
    .map(parseBaby)
    .reduce((acc, cur) => {
      if (cur)
        if (cur > 9 || (acc[acc.length - 1] ?? 0) < 9)
          acc.push(cur);
        else acc[acc.length - 1] += cur;
      else acc.push(0);
      return acc;
    }, [])
    .reduce((acc, cur, i) => (i ? sexagesimal : 1) * acc + cur, 0);
}

function toBaby(n) {
  return n
    ? n
        .toString()
        .split('')
        .reverse()
        .reduce((acc, x, i) => baby[i][x] + acc, '')
    : zero;
}

function toBabylonian(n) {
  return (
    (n >= sexagesimal ? toBabylonian(Math.floor(n / sexagesimal)) : '') + toBaby(n % sexagesimal)
  );
}

export default createNumeral(parseBabylonian, toBabylonian);
