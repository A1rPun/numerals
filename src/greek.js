import { createNumeral } from './common.js';

const greek = [
  ['', 'α', 'β', 'γ', 'δ', 'ε', 'ϝ', 'ζ', 'η', 'θ'],
  ['', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ϙ'],
  ['', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'ϡ'],
];
const keraia = 'ʹ';
const keraia_thousand = '͵';

function toGreekNumeral(n) {
  return [...n]
    .reverse()
    .reduce((acc, x, i) => greek[i][x] + acc, '');
}

function parseGreek(str) {
  throw Error('Not implemented');
}

function toGreek(n = 0) {
  if (n < 1 || n > 999999) return '';
  const thousands = Math.floor(n / 1000).toString();
  const ones = (n - thousands * 1000).toString();
  return `${thousands && thousands !== '0' ? `${keraia_thousand}${toGreekNumeral(thousands)}` : ''}${
    ones && ones !== '0' ? ` ${toGreekNumeral(ones)}${keraia}` : ''
  }`.trim();
}

export default createNumeral(parseGreek, toGreek);
