import { normalizeString } from './common';

const tallyMarks = ['', '𝍲', '𝍳', '𝍴', '𝍵', '𝍶'];

const surrogate = 55348;

export function parseChineseTallyMarks(str) {
  return normalizeString(str, surrogate).reduce((acc, x) => acc + tallyMarks.indexOf(x), 0);
}

export function toChineseTallyMarks(n) {
  return `${tallyMarks[5].repeat(n / 5)}${tallyMarks[n % 5]}`;
}
