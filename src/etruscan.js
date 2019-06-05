const etruscan = [
  ['', '𐌠', '𐌠𐌠', '𐌠𐌠𐌠', '𐌠𐌠𐌠𐌠', '𐌡', '𐌠𐌡', '𐌠𐌠𐌡', '𐌠𐌠𐌠𐌡', '𐌠𐌠𐌠𐌠𐌡'], // ones
  ['', '𐌢', '𐌢𐌢', '𐌢𐌢𐌢', '𐌢𐌢𐌢𐌢', '𐌣', '𐌢𐌣', '𐌢𐌢𐌣', '𐌢𐌢𐌢𐌣', '𐌢𐌢𐌢𐌢𐌣'], // tens
];

export function parseEtruscan(str) {
  throw Error('Not implemented');
}
export function toEtruscan(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => acc + (i < etruscan.length ? etruscan[i][x] : '𐌟'.repeat(x)), '');
}
