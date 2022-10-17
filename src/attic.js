import { createNumeral } from './common.js';

const attic = [
  ['', 'Ι', 'II', 'III', 'IIII', 'Π', 'ΠI', 'ΠII', 'ΠIII', 'ΠIIII'], // ones
  ['', 'Δ', 'ΔΔ', 'ΔΔΔ', 'ΔΔΔΔ', '𐅄', '𐅄Δ', '𐅄ΔΔ', '𐅄ΔΔΔ', '𐅄ΔΔΔΔ'], // tens
  ['', 'Η', 'ΗΗ', 'ΗΗΗ', 'ΗΗΗΗ', '𐅅', '𐅅Η', '𐅅ΗΗ', '𐅅ΗΗΗ', '𐅅ΗΗΗΗ'], // hundreds
  ['', 'Χ', 'ΧΧ', 'ΧΧΧ', 'ΧΧΧΧ', '𐅆', '𐅆Χ', '𐅆ΧΧ', '𐅆ΧΧΧ', '𐅆ΧΧΧΧ'], // thousands
  ['', 'Μ', 'ΜΜ', 'ΜΜΜ', 'ΜΜΜΜ', '𐅇', '𐅇Μ', '𐅇ΜΜ', '𐅇ΜΜΜ', '𐅇ΜΜΜΜ'], // tens of thousands
];

function parseAttic(str) {
  throw Error('Not implemented');
}
function toAttic(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < attic.length ? attic[i][x] : '𐅇𐅇'.repeat(x)) + acc, '');
}

export default createNumeral(parseAttic, toAttic);
