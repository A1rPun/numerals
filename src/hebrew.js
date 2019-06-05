const hebrewNumerals = [
  ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'], // ones
  ['', 'י', 'כ', 'ל', 'ם', 'ן', 'ס', 'ע', 'פ', 'צ'], // tens
  ['', 'ק', 'ר', 'ש', 'ת', 'ך', 'ם', 'ן', 'ף', 'ץ'], // hundreds
];

export function parseHebrew(str) {
  throw Error('Not implemented');
}
export function toHebrew(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < 3 ? hebrewNumerals[i][x] : '') + acc, '');
}
