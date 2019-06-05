const aegean = [
  ['', '𐄇', '𐄈', '𐄉', '𐄊', '𐄋', '𐄌', '𐄍', '𐄎', '𐄏'], // ones
  ['', '𐄐', '𐄑', '𐄒', '𐄓', '𐄔', '𐄕', '𐄖', '𐄗', '𐄘'], // tens
  ['', '𐄙', '𐄚', '𐄛', '𐄜', '𐄝', '𐄞', '𐄟', '𐄠', '𐄡'], // hundreds
  ['', '𐄢', '𐄣', '𐄤', '𐄥', '𐄦', '𐄧', '𐄨', '𐄩', '𐄪'], // thousands
  ['', '𐄫', '𐄬', '𐄭', '𐄮', '𐄯', '𐄰', '𐄱', '𐄲', '𐄳'], // tenthousands
];

export function parseAegean(str) {
  const numeral = aegean.reduce(
    (acc, x) => x.indexOf(x.find(y => y && ~str.indexOf(y)) || '') + acc,
    ''
  );
  return parseInt(numeral, 10) + str.match(/^M*/)[0].length * 1000;
}
export function toAegean(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < 5 ? aegean[i][x] : '') + acc, '');
}
