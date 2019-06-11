const abjad = [
  ['', 'أ', 'ب', 'ج', 'د', 'ه', 'و', 'ز', 'ح', 'ط'], // ones
  ['', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 'ص'], // tens
  ['', 'ق', 'ر', 'ش', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ'], // hundreds
];

export function parseAbjad(str) {
  throw Error('Not implemented');
}
export function toAbjad(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < abjad.length ? abjad[i][x] : 'غ'.repeat(x)) + acc, '');
}
