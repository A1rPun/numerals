const cyrillic = [
  ['', 'А', 'В', 'Г', 'Д', 'Е', 'Ѕ', 'З', 'И', 'Ѳ'], // ones
  ['', 'І', 'К', 'Л', 'М', 'Н', 'Ѯ', 'О', 'П', 'Ч'], // tens Ҁ = 90
  ['', 'Р', 'C', 'T', 'Ѵ', 'Ф', 'Х', 'Ѱ', 'Ѡ', 'Ц'], // hundreds Ѧ = 900
];

export function parseCyrillic(str) {
  throw Error('Not implemented');
}
export function toCyrillic(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < cyrillic.length ? cyrillic[i][x] : '҂'.repeat(x)) + acc, '');
}
