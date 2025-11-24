import { createNumeral } from './common.js';

const tallyMarks = ['', '𝍩', '𝍪', '𝍫', '𝍬', '𝍸'];

function parseTallyMarks(str) {
  return [...str].reduce((acc, x) => acc + tallyMarks.indexOf(x), 0);
}

function toTallyMarks(n) {
  return `${tallyMarks[5].repeat(n / 5)}${tallyMarks[n % 5]}`;
}

export default createNumeral(parseTallyMarks, toTallyMarks);
