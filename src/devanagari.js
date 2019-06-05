import { parseNumeral, toNumeral } from './common';

const devanagari = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function parseDevanagari(str) {
  return parseNumeral(str, devanagari);
}
export function toDevanagari(n) {
  return toNumeral(n, devanagari);
}
