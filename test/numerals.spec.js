import * as numerals from '../main.js';

function testNumerals(parse, to, range = 9999) {
  // const testArray = Array.from(Array(range), (_, i) => i + 1);
  // it(`should convert itself from 1 to ${range}`, () => {
  //   testArray.forEach(i => expect(parse(to(i))).toBe(i));
  // });
  const testArray = Array.from(
    Array(range.toString().length * 9),
    (_, i) => ((i % 9) + 1) * (10 ** Math.floor(i / 9) || 1)
  );
  testArray.forEach(i => it(`should convert ${i}`, () => expect(parse(to(i))).toBe(i)));
}

describe('Abjad', () => testNumerals(numerals.parseAbjad, numerals.toAbjad, 999));
describe('Aegean', () => testNumerals(numerals.parseAegean, numerals.toAegean, 99999));
describe('Arabic', () => testNumerals(numerals.parseArabic, numerals.toArabic));
describe('Armenian', () => testNumerals(numerals.parseArmenian, numerals.toArmenian));
// describe('Asian', () => testNumerals(numerals.parseAsian, numerals.toAsian));
// describe('AsianFormal', () => testNumerals(numerals.parseAsianFormal, numerals.toAsianFormal));
// describe('Attic', () => testNumerals(numerals.parseAttic, numerals.toAttic, 99999));
// describe('Babylonian', () => testNumerals(numerals.parseBabylonian, numerals.toBabylonian));
// describe('Bengali', () => testNumerals(numerals.parseBengali, numerals.toBengali));
describe('Bijective', () => testNumerals(numerals.parseBijective, numerals.toBijective));
describe('Braille', () => testNumerals(numerals.parseBraille, numerals.toBraille));
// describe('Burmese', () => testNumerals(numerals.parseBurmese, numerals.toBurmese));
// describe('Chuvash', () => testNumerals(numerals.parseChuvash, numerals.toChuvash));
describe('CountingRod', () => testNumerals(numerals.parseCountingRod, numerals.toCountingRod));
describe('Cyrillic', () => testNumerals(numerals.parseCyrillic, numerals.toCyrillic));
// describe('Devanagari', () => testNumerals(numerals.parseDevanagari, numerals.toDevanagari));
describe('Duodecimal', () => testNumerals(numerals.parseDuodecimal, numerals.toDuodecimal));
describe('Egyptian', () => testNumerals(numerals.parseEgyptian, numerals.toEgyptian, 9999999));
// describe('Etruscan', () => testNumerals(numerals.parseEtruscan, numerals.toEtruscan, 999));
describe('Geez', () => testNumerals(numerals.parseGeez, numerals.toGeez, 999));
describe('Georgian', () => testNumerals(numerals.parseGeorgian, numerals.toGeorgian, 99999));
describe('Glagolitic', () => testNumerals(numerals.parseGlagolitic, numerals.toGlagolitic, 6999));
// describe('Greek', () => testNumerals(numerals.parseGreek, numerals.toGreek));
// describe('GreekModern', () => testNumerals(numerals.parseGreekModern, numerals.toGreekModern));
// describe('Gujarati', () => testNumerals(numerals.parseGujarati, numerals.toGujarati));
// describe('Gurmukhi', () => testNumerals(numerals.parseGurmukhi, numerals.toGurmukhi));
describe('Hebrew', () => testNumerals(numerals.parseHebrew, numerals.toHebrew, 999));
// describe('Kannada', () => testNumerals(numerals.parseKannada, numerals.toKannada));
// describe('Kharosthi', () => testNumerals(numerals.parseKharosthi, numerals.toKharosthi));
// describe('Khmer', () => testNumerals(numerals.parseKhmer, numerals.toKhmer));
// describe('Lao', () => testNumerals(numerals.parseLao, numerals.toLao));
// describe('Malayalam', () => testNumerals(numerals.parseMalayalam, numerals.toMalayalam));
describe('Maya', () => testNumerals(numerals.parseMaya, numerals.toMaya));
// describe('Mongolian', () => testNumerals(numerals.parseMongolian, numerals.toMongolian));
// describe('Odia', () => testNumerals(numerals.parseOdia, numerals.toOdia));
// describe('Persian', () => testNumerals(numerals.parsePersian, numerals.toPersian));
// describe('Phoenician', () => testNumerals(numerals.parsePhoenician, numerals.toPhoenician, 999));
describe('Roman', () => testNumerals(numerals.parseRoman, numerals.toRoman));
// describe('Tamil', () => testNumerals(numerals.parseTamil, numerals.toTamil));
// describe('Telugu', () => testNumerals(numerals.parseTelugu, numerals.toTelugu));
// describe('Thai', () => testNumerals(numerals.parseThai, numerals.toThai));
// describe('Tibetan', () => testNumerals(numerals.parseTibetan, numerals.toTibetan));
