const modernGreek = [
  ['', 'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ϛ', 'Ζ', 'Η', 'Θ'],
  ['', 'Ι', 'Κ', 'Λ', 'Μ', 'N', 'Ξ', 'Ο', 'Π', 'Ϟ'],
  ['', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'Ϡ'],
];
const keraia = 'ʹ';
const keraia_thousand = '͵';

function toGreekNumeral(n) {
  return n
    .split('')
    .reverse()
    .reduce((acc, x, i) => modernGreek[i][x] + acc, '');
}

export function parseGreekModern(str) {
  throw Error('Not implemented');
}
export function toGreekModern(n = 0) {
  if (n < 1 || n > 999999) return '';
  const thousands = Math.floor(n / 1000).toString();
  const ones = (n - thousands * 1000).toString();
  return `${thousands && thousands !== '0' ? `${keraia_thousand}${toGreekNumeral(thousands)}` : ''}${
    ones && ones !== '0' ? ` ${toGreekNumeral(ones)}${keraia}` : ''
  }`.trim();
}
