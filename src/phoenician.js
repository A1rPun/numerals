import { createNumeral } from './common.js';

const phoenician = [
  ['', '𐤖', '𐤚', '𐤛', '𐤛𐤖', '𐤛𐤚', '𐤛𐤛', '𐤛𐤛𐤖', '𐤛𐤛𐤚', '𐤛𐤛𐤛'],
  ['', '𐤗', '𐤘', '𐤘𐤗', '𐤘𐤘', '𐤘𐤘𐤗', '𐤘𐤘𐤘', '𐤘𐤘𐤘𐤗', '𐤘𐤘𐤘𐤘', '𐤘𐤘𐤘𐤘𐤗'],
  ['', '𐤙', '𐤚𐤙', '𐤛𐤙', '𐤛𐤖𐤙', '𐤛𐤚𐤙', '𐤛𐤛𐤙', '𐤛𐤛𐤖𐤙', '𐤛𐤛𐤚𐤙', '𐤛𐤛𐤛𐤙'],
];

function parsePhoenician(str) {
  throw Error('Not implemented');
}
function toPhoenician(n) {
  return [...n.toString()]
    .reverse()
    .reduce((acc, x, i) => (i < phoenician.length ? phoenician[i][x] : '') + acc, '');
}

export default createNumeral(parsePhoenician, toPhoenician);
