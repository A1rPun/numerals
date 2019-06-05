const georgian = [
  ['', 'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'ჱ', 'თ'], // ones
  ['', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ჲ', 'ო', 'პ', 'ჟ'], // tens
  ['', 'რ', 'ს', 'ტ', 'ჳ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ'], // hundreds უ = 400
  ['', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჴ', 'ჯ', 'ჰ'], // thousands
];

export function parseGeorgian(str) {
  throw Error('Not implemented');
}
export function toGeorgian(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < georgian.length ? georgian[i][x] : 'ჵ'.repeat(x)) + acc, '');
}
