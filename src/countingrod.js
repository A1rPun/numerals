const countingRod = [
  ['o', '𝍩', '𝍪', '𝍫', '𝍬', '𝍭', '𝍮', '𝍯', '𝍰', '𝍱'],
  ['o', '𝍠', '𝍡', '𝍢', '𝍣', '𝍤', '𝍥', '𝍦', '𝍧', '𝍨'],
];

export function parseCountingRod(str) {
  throw Error('Not implemented');
  // TODO: Unicode fix
  return +str
    .split('')
    .map(x => {
      const vertical = countingRod[0].indexOf(x);
      if (~vertical) return vertical;
      const horizontal = countingRod[1].indexOf(x);
      return ~horizontal ? horizontal : '';
    })
    .join('');
}
export function toCountingRod(n) {
  let swap = n.toString().length % 2;
  return n
    .toString()
    .split('')
    .map(x => countingRod[(swap ^= 1)][x])
    .join('');
}
