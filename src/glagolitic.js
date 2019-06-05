const glagolitic = [
  ['', 'Ⰰ', 'Ⰱ', 'Ⰲ', 'Ⰳ', 'Ⰴ', 'Ⰵ', 'Ⰶ', 'Ⰷ', 'Ⰸ'], // ones
  ['', 'Ⰺ', 'Ⰻ', 'Ⰼ', 'Ⰽ', 'Ⰾ', 'Ⰿ', 'Ⱀ', 'Ⱁ', 'Ⱂ'], // tens Ⰹ = 10
  ['', 'Ⱃ', 'Ⱄ', 'Ⱅ', 'Ⱆ', 'Ⱇ', 'Ⱈ', 'Ⱉ', 'Ⱋ', 'Ⱌ'], // hundreds
  ['', 'Ⱍ', 'Ⱎ', 'Ⱏ', 'Ⱑ', 'Ⱓ', 'Ⱗ', '', '', ''], // thousands Ⱐ = 3000
];

export function parseGlagolitic(str) {
  throw Error('Not implemented');
}
export function toGlagolitic(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < glagolitic.length ? glagolitic[i][x] : '') + acc, '');
}
