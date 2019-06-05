const countingRodNumerals = [
  ['o', '𝍩', '𝍪', '𝍫', '𝍬', '𝍭', '𝍮', '𝍯', '𝍰', '𝍱'],
  ['o', '𝍠', '𝍡', '𝍢', '𝍣', '𝍤', '𝍥', '𝍦', '𝍧', '𝍨'],
];

export function parseCountingRod(str) {
  return +str
    .split('')
    .map(x => numerals.indexOf(x))
    .join('');
}
export function toCountingRod(n) {
  let swap = n.toString().length % 2;
  return n
    .toString()
    .split('')
    .map(x => countingRodNumerals[(swap ^= 1)][x])
    .join('');
}
