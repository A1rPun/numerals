const egyptian = ['𓏺', '𓎆', '𓍢', '𓆼', '𓂭', '𓆐', '𓁨'];

export function parseEgyptian(str) {
  throw Error('Not implemented');
}
export function toEgyptian(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < egyptian.length ? egyptian[i].repeat(x) : '') + acc, '');
}
