import { createAlphabeticNumeral } from './common';

export const {
  parse: parseHebrew,
  to: toHebrew,
} = createAlphabeticNumeral([
  ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'], // ones
  ['', 'י', 'כ', 'ל', 'מ', 'ן', 'ס', 'ע', 'פ', 'צ'], // tens
  ['', 'ק', 'ר', 'ש', 'ת', 'ך', 'ם', 'נ', 'ף', 'ץ'], // hundreds
]);
