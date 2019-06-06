// 6 = ϝ ?
const greek = [
  ['', 'α', 'β', 'γ', 'δ', 'ε', 'ϛ', 'ζ', 'η', 'θ'],
  ['', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ϙ'],
  ['', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'ϡ'],
];
const keraia = 'ʹ';
const keraia_thousand = '͵';

function toGreekChunk(n) {
  return n
    .split('')
    .reverse()
    .reduce((acc, x, i) => greek[i][x] + acc, '');
}

export function parseGreek(str) {
  throw Error('Not implemented');
}
export function toGreek(n) {
  const [ones, thousands] = n
    .toString()
    .match(/.{1,3}/g)
    .reverse();
  return `${thousands ? `${keraia_thousand}${toGreekChunk(thousands)}` : ''}${
    ones && ones !== '0' && ones !== '000' ? ` ${toGreekChunk(ones)}${keraia}` : ''
  }`.trim();
}
