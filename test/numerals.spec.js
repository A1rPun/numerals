import {
  parseAegean,
  parseBijective,
  parseRoman,
  toAegean,
  toBabylonian,
  toBijective,
  toGreek,
  toRoman,
} from '../main.js';

function testNumerals(fn) {
  const testArray = Array.from(Array(9999), (_, i) => i + 1);
  testArray.forEach(i => fn(i));
}

// describe('Aegean', () => {
//   // Passes all tests 1-9999
//   testNumerals(i =>
//     it(i.toString(), () => {
//       expect(parseAegean(toAegean(i))).toBe(i);
//     })
//   );
// });

describe('Babylonian', () => {
  it('should convert 0 to a space', () => {
    expect(toBabylonian(0)).toBe(' ');
  });
  it('should convert 23', () => {
    expect(toBabylonian(23)).toBe('𒎙𒐈');
    expect(toBabylonian(23 * 60)).toBe('𒎙𒐈 ');
    expect(toBabylonian(23 * 60 * 60)).toBe('𒎙𒐈  ');
  });
});

// describe('Bijective', () => {
//   // Passes all tests 1-9999
//   testNumerals(i =>
//     it(i.toString(), () => {
//       expect(parseBijective(toBijective(i))).toBe(i);
//     })
//   );
// });

describe('Greek', () => {
  it('should convert 0 to an empty string', () => {
    expect(toGreek(0)).toBe('');
  });
  it('should have the correct keraia', () => {
    expect(toGreek(818)).toBe('ωιηʹ');
    expect(toGreek(818000)).toBe('͵ωιη');
    expect(toGreek(818818)).toBe('͵ωιη ωιηʹ');
  });
});

// describe('Roman', () => {
//   // Passes all tests 1-9999
//   testNumerals(i =>
//     it(i.toString(), () => {
//       expect(parseRoman(toRoman(i))).toBe(i);
//     })
//   );
// });
