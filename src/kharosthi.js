import { createNumeral } from './common.js';

const kharosthi = [
  ['', '𐩀', '𐩁', '𐩂', '𐩃', '𐩃𐩀', '𐩃𐩁', '𐩃𐩂', '𐩃𐩃', '𐩃𐩃𐩀'],
  ['', '𐩄', '𐩅', '𐩅𐩄', '𐩅𐩅', '𐩅𐩄', '𐩅𐩅𐩅', '𐩅𐩅𐩄', '𐩅𐩅𐩅𐩅', '𐩅𐩅𐩅𐩅𐩄'],
  ['', '𐩆', '𐩁𐩆', '𐩂𐩆', '𐩃𐩆', '𐩃𐩀𐩆', '𐩃𐩁𐩆', '𐩃𐩂𐩆', '𐩃𐩃𐩆', '𐩃𐩃𐩀𐩆'],
];

function parseKharosthi(str) {
  throw Error('Not implemented');
}

function toKharosthi(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < kharosthi.length ? kharosthi[i][x] : '𐩇'.repeat(x)) + acc, '');
}

export default createNumeral(parseKharosthi, toKharosthi);
