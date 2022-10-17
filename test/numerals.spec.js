import * as numerals from '../numerals.js';

function testNumerals(numeral, range = 9999) {
  // const testArray = Array.from(Array(range), (_, i) => i + 1);
  // it(`should convert itself from 1 to ${range}`, () => {
  //   testArray.forEach(i => expect(numeral.parse(numeral.to(i))).toBe(i));
  // });
  const testArray = Array.from(
    Array(range.toString().length * 9),
    (_, i) => ((i % 9) + 1) * (10 ** Math.floor(i / 9) || 1)
  );
  testArray.forEach(i => it(`should convert ${i}`, () => expect(numeral.parse(numeral.to(i))).toBe(i)));
}

describe('Abjad', () => testNumerals(numerals.abjad, 999));
describe('Aegean', () => testNumerals(numerals.aegean, 99999));
// describe('Arabic', () => testNumerals(numerals.arabic));
describe('Armenian', () => testNumerals(numerals.armenian));
// describe('Asian', () => testNumerals(numerals.asian));
// describe('AsianFormal', () => testNumerals(numerals.asianFormal));
// describe('Attic', () => testNumerals(numerals.attic, 99999));
describe('Babylonian', () => testNumerals(numerals.babylonian));
describe('Bengali', () => testNumerals(numerals.bengali));
describe('Bijective', () => testNumerals(numerals.bijective));
describe('Braille', () => testNumerals(numerals.braille));
// describe('Burmese', () => testNumerals(numerals.burmese));
// describe('Chuvash', () => testNumerals(numerals.chuvash));
describe('CountingRod', () => testNumerals(numerals.countingRod));
describe('Cyrillic', () => testNumerals(numerals.cyrillic));
describe('Devanagari', () => testNumerals(numerals.devanagari));
describe('Duodecimal', () => testNumerals(numerals.duodecimal));
describe('Egyptian', () => testNumerals(numerals.egyptian, 9999999));
// describe('Etruscan', () => testNumerals(numerals.etruscan, 999));
describe('Geez', () => testNumerals(numerals.geez, 999));
describe('Georgian', () => testNumerals(numerals.georgian, 99999));
// describe('Glagolitic', () => testNumerals(numerals.glagolitic, 6999));
// describe('Greek', () => testNumerals(numerals.greek));
// describe('GreekModern', () => testNumerals(numerals.greekModern));
describe('Gujarati', () => testNumerals(numerals.gujarati));
describe('Gurmukhi', () => testNumerals(numerals.gurmukhi));
describe('Hebrew', () => testNumerals(numerals.hebrew, 999));
describe('Kannada', () => testNumerals(numerals.kannada));
// describe('Kharosthi', () => testNumerals(numerals.kharosthi));
describe('Khmer', () => testNumerals(numerals.khmer));
describe('Lao', () => testNumerals(numerals.lao));
// describe('Malayalam', () => testNumerals(numerals.malayalam));
describe('Maya', () => testNumerals(numerals.maya));
describe('Mongolian', () => testNumerals(numerals.mongolian));
// describe('Odia', () => testNumerals(numerals.odia));
// describe('Persian', () => testNumerals(numerals.persian));
// describe('Phoenician', () => testNumerals(numerals.phoenician, 999));
describe('Roman', () => testNumerals(numerals.roman));
describe('TallyMarks', () => testNumerals(numerals.tallyMarks), 999);
describe('TallyMarksChinese', () => testNumerals(numerals.tallyMarksChinese), 999);
describe('Tamil', () => testNumerals(numerals.tamil));
describe('Telugu', () => testNumerals(numerals.telugu));
describe('Thai', () => testNumerals(numerals.thai));
describe('Tibetan', () => testNumerals(numerals.tibetan));
