import { parseNumeral, toNumeral } from './common';

const devanagariNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function parseDevanagari(str) {
  return parseNumeral(str, devanagariNumerals);
}
export function toDevanagari(n) {
  return toNumeral(n, devanagariNumerals);
}
