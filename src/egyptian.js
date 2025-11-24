import { createNumeral } from './common.js';

const egyptian = ['𓏺', '𓎆', '𓍢', '𓆼', '𓂭', '𓆐', '𓁨'];

function parseEgyptian(str) {
  return egyptian.reduce(
    (acc, x, i) => acc + (str.match(new RegExp(x, 'g')) || []).length * (10 ** i || 1),
    0
  );
}
function toEgyptian(n) {
  return [...n.toString()]
    .reverse()
    .reduce((acc, x, i) => (i < egyptian.length ? egyptian[i].repeat(x) : '') + acc, '');
}

export default createNumeral(parseEgyptian, toEgyptian);
