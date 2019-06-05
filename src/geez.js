const geez = [
  ['', '፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱'], // ones
  ['', '፲', '፳', '፴', '፵', '፶', '፷', '፸', '፹', '፺'], // tens
];

export function parseGeez(str) {
  throw Error('Not implemented');
}
export function toGeez(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < geez.length ? geez[i][x] : '፻'.repeat(x)) + acc, '');
}
