import { createNumeral } from './common.js';

const tallyMarks = ['', '𝍲', '𝍳', '𝍴', '𝍵', '𝍶'];

function parseChineseTallyMarks(str) {
  return [...str].reduce((acc, x) => acc + tallyMarks.indexOf(x), 0);
}

function toChineseTallyMarks(n) {
  return `${tallyMarks[5].repeat(n / 5)}${tallyMarks[n % 5]}`;
}

export default createNumeral(parseChineseTallyMarks, toChineseTallyMarks);
