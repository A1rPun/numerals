import { normalizeString } from './common';

const tallyMarks = ['', '𝍩', '𝍪', '𝍫', '𝍬', '𝍸'];

const surrogate = 55348;

export function parseTallyMarks(str) {
  return normalizeString(str, surrogate).reduce((acc, x) => acc + tallyMarks.indexOf(x), 0);
}

export function toTallyMarks(n) {
  return `${tallyMarks[5].repeat(n / 5)}${tallyMarks[n % 5]}`;
}
