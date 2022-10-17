import { createNumeral } from './common.js';

function parseTallyMarks(str) {
  const [last, ...parts] = str.split('/').reverse();
  return parts.length * 5 + last.length;
}

function toTallyMarks(n) {
  return Array.from(Array(+n), (_, i) => ++i % 5 ? '|' : '/').join('');
}

export default createNumeral(parseTallyMarks, toTallyMarks);
