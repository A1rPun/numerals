import { createNumeral } from './common.js';

const etruscan = [
  ['', '𐌠', '𐌠𐌠', '𐌠𐌠𐌠', '𐌠𐌠𐌠𐌠', '𐌡', '𐌠𐌡', '𐌠𐌠𐌡', '𐌠𐌠𐌠𐌡', '𐌠𐌠𐌠𐌠𐌡'], // ones
  ['', '𐌢', '𐌢𐌢', '𐌢𐌢𐌢', '𐌢𐌢𐌢𐌢', '𐌣', '𐌢𐌣', '𐌢𐌢𐌣', '𐌢𐌢𐌢𐌣', '𐌢𐌢𐌢𐌢𐌣'], // tens
];

function parseEtruscan(str) {
  throw Error('Not implemented');
}

function toEtruscan(n) {
  return [...n.toString()]
    .reverse()
    .reduce((acc, x, i) => acc + (i < etruscan.length ? etruscan[i][x] : '𐌟'.repeat(x)), '');
}

export default createNumeral(parseEtruscan, toEtruscan);
