const abjad = [
  ['', 'أ', 'ب', 'ج', 'د', 'ه', 'و', 'ز', 'ح', 'ط'], // ones
  ['', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 'ص'], // tens
  ['', 'ق', 'ر', 'ش', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ'], // hundreds
];

export function parseAbjad(str) {
  const abjadDict = abjad.reduce((acc, x, i) => {
    return x.reduce((acc, y, j) => {
      acc[y] = j * (i ? 10 ** i : 1);
      return acc;
    }, acc);
  }, {});
  return str.split('').reduce((acc, x) => acc + (abjadDict[x] || 0), 0);
}
export function toAbjad(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < abjad.length ? abjad[i][x] : 'غ'.repeat(x)) + acc, '');
}
