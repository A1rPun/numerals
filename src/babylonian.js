import { normalizeString } from './common';

const baby = [['', '𒐕', '𒐖', '𒐈', '𒐉', '𒐊', '𒐋', '𒑂', '𒑄', '𒑆'], ['', '𒌋', '𒎙', '𒌍', '𒑩', '𒑪']];
const zero = ' ';
const sexagesimal = 60;
const surrogate = 55305;

function toBaby(n) {
  return n
    ? n
        .toString()
        .split('')
        .reverse()
        .reduce((acc, x, i) => baby[i][x] + acc, '')
    : zero;
}

export function parseBabylonian(str) {
  throw Error('Not implemented');
}
export function toBabylonian(n) {
  return (n >= sexagesimal ? toBabylonian(Math.floor(n / sexagesimal)) : '') + toBaby(n % sexagesimal);
}
