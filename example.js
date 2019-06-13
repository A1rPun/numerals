const {
  toAbjad,
  toAegean,
  toArabic,
  toArmenian,
  toAsian,
  toAsianFormal,
  toAttic,
  toBabylonian,
  toBengali,
  toBijective,
  toBraille,
  toBurmese,
  toChuvash,
  toCountingRod,
  toCyrillic,
  toDevanagari,
  toDuodecimal,
  toEgyptian,
  toEtruscan,
  toGeez,
  toGeorgian,
  toGlagolitic,
  toGreek,
  toGreekModern,
  toGujarati,
  toGurmukhi,
  toHebrew,
  toKannada,
  toKharosthi,
  toKhmer,
  toLao,
  toMalayalam,
  toMayan,
  toMongolian,
  toOdia,
  toPersian,
  toPhoenician,
  toRoman,
  toTamil,
  toTelugu,
  toThai,
  toTibetan,
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
log('Bengali', toBengali(input));
log('Bijective', toBijective(input));
log('Braille', toBraille(input));
log('Burmese', toBurmese(input));
log('Chuvash', toChuvash(input));
log('Counting Rod', toCountingRod(input));
log('Cyrillic', toCyrillic(input));
log('Devanagari', toDevanagari(input));
log('Duodecimal', toDuodecimal(input));
log('Egyptian', toEgyptian(input));
log('Etruscan', toEtruscan(input));
log('Geez', toGeez(input));
log('Georgian', toGeorgian(input));
log('Glagolitic', toGlagolitic(input));
log('Greek', toGreek(input));
log('Greek Modern', toGreekModern(input));
log('Gujarati', toGujarati(input));
log('Gurmukhi', toGurmukhi(input));
log('Hebrew', toHebrew(input));
log('Kannada', toKannada(input));
log('Kharosthi', toKharosthi(input));
log('Khmer', toKhmer(input));
log('Lao', toLao(input));
log('Malayalam', toMalayalam(input));
log('Mayan', toMayan(input));
log('Mongolian', toMongolian(input));
log('Odia', toOdia(input));
log('Persian', toPersian(input));
log('Phoenician', toPhoenician(input));
log('Roman', toRoman(input));
log('Tamil', toTamil(input));
log('Telugu', toTelugu(input));
log('Thai', toThai(input));
log('Tibetan', toTibetan(input));
