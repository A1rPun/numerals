const {
  toAegean,
  toArabic,
  toAsian,
  toAsianFormal,
  toAttic,
  toBabylonian,
  toBengali,
  toBijective,
  toBurmese,
  toChuvash,
  toCountingRod,
  toDevanagari,
  toDuodecimal,
  toEtruscan,
  toGujarati,
  toGurmukhi,
  toHebrew,
  toKannada,
  toKhmer,
  toLao,
  toMalayalam,
  toOdia,
  toPersian,
  toRoman,
  toTamil,
  toTelugu,
  toThai,
  toTibetan,
} = require('./dist/numerals.js');

const input = (typeof process !== 'undefined' && process.argv[2]) || 29;
const log = (name, result) => console.log(name.padEnd(15), result);

log('Aegean', toAegean(input));
log('Arabic', toArabic(input));
log('Asian Formal', toAsianFormal(input));
log('Asian', toAsian(input));
log('Attic', toAttic(input));
log('Babylonian', toBabylonian(input));
log('Bengali', toBengali(input));
log('Bijective', toBijective(input));
log('Burmese', toBurmese(input));
log('Chuvash', toChuvash(input));
log('Counting Rod', toCountingRod(input));
log('Devanagari', toDevanagari(input));
log('Duodecimal', toDuodecimal(input));
// log('Etruscan', toEtruscan(input));
log('Gujarati', toGujarati(input));
log('Gurmukhi', toGurmukhi(input));
log('Hebrew', toHebrew(input));
log('Kannada', toKannada(input));
log('Khmer', toKhmer(input));
log('Lao', toLao(input));
log('Malayalam', toMalayalam(input));
log('Odia', toOdia(input));
log('Persian', toPersian(input));
log('Roman', toRoman(input));
log('Tamil', toTamil(input));
log('Telugu', toTelugu(input));
log('Thai', toThai(input));
log('Tibetan', toTibetan(input));
