const {
  toAbjad,
  toAegean,
  toArabic,
  toArmenian,
  toAsian,
  toAsianFormal,
  toAttic,
  toBabylonian,
  toBijective,
  toBraille,
  toChuvash,
  toCountingRod,
  toCyrillic,
  toDuodecimal,
  toEgyptian,
  toEtruscan,
  toGeez,
  toGeorgian,
  toGlagolitic,
  toGreek,
  toGreekModern,
  toHebrew,
  toKharosthi,
  toMaya,
  toPhoenician,
  toRoman,
  toTallyMarks,
} = require('./dist/numerals.js');

const input = (typeof process !== 'undefined' && process.argv[2]) || 29;
const log = (name, result) => console.log(name.padEnd(15), result);

log('Abjad', toAbjad(input));
log('Aegean', toAegean(input));
log('Arabic', toArabic(input));
log('Armenian', toArmenian(input));
log('Asian Eastern', toAsian(input));
log('Asian Formal', toAsianFormal(input));
log('Attic', toAttic(input));
log('Babylonian', toBabylonian(input));
log('Bijective', toBijective(input));
log('Braille', toBraille(input));
log('Chuvash', toChuvash(input));
log('Counting Rod', toCountingRod(input));
log('Cyrillic', toCyrillic(input));
log('Duodecimal', toDuodecimal(input));
log('Egyptian', toEgyptian(input));
log('Etruscan', toEtruscan(input));
log('Geez', toGeez(input));
log('Georgian', toGeorgian(input));
log('Glagolitic', toGlagolitic(input));
log('Greek', toGreek(input));
log('Greek Modern', toGreekModern(input));
log('Hebrew', toHebrew(input));
log('Kharosthi', toKharosthi(input));
log('Maya', toMaya(input));
log('Phoenician', toPhoenician(input));
log('Roman', toRoman(input));
log('Tallymarks', input < 100 ? toTallyMarks(input) : 'Too big');
