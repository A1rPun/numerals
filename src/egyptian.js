const egyptian = ['𓏺', '𓎆', '𓍢', '𓆼', '𓂭', '𓆐', '𓁨'];

export function parseEgyptian(str) {
  return egyptian.reduce(
    (acc, x, i) => acc + (str.match(new RegExp(x, 'g')) || []).length * (10 ** i || 1),
    0
  );
}
export function toEgyptian(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < egyptian.length ? egyptian[i].repeat(x) : '') + acc, '');
}
