import { tallyMarks, tallyMarksChinese } from '../numerals.js';

describe('Tally Marks', () => {
  it('should convert a number to tally marks', () => {
    expect(tallyMarks.to(5)).toBe('𝍸');
    expect(tallyMarks.to(12)).toBe('𝍸𝍸𝍪');
    expect(tallyMarks.to(24)).toBe('𝍸𝍸𝍸𝍸𝍬');
  });

  it('should convert tally marks to a number', () => {
    expect(tallyMarks.parse('𝍸')).toBe(5);
    expect(tallyMarks.parse('𝍸𝍸𝍪')).toBe(12);
    expect(tallyMarks.parse('𝍸𝍸𝍸𝍸𝍬')).toBe(24);
  });
});

describe('Tally Marks Chinese', () => {
  it('should convert a number to tally marks', () => {
    expect(tallyMarksChinese.to(5)).toBe('𝍶');
    expect(tallyMarksChinese.to(12)).toBe('𝍶𝍶𝍳');
    expect(tallyMarksChinese.to(24)).toBe('𝍶𝍶𝍶𝍶𝍵');
  });

  it('should convert tally marks to a number', () => {
    expect(tallyMarksChinese.parse('𝍶')).toBe(5);
    expect(tallyMarksChinese.parse('𝍶𝍶𝍳')).toBe(12);
    expect(tallyMarksChinese.parse('𝍶𝍶𝍶𝍶𝍵')).toBe(24);
  });
});

// describe('Tally Marks Old', () => {
//   it('should convert a number to tally marks', () => {
//     expect(tallyMarks.to(5)).toBe('||||/');
//     expect(tallyMarks.to(12)).toBe('||||/||||/||');
//     expect(tallyMarks.to(24)).toBe('||||/||||/||||/||||/||||');
//   });

//   it('should convert tally marks to a number', () => {
//     expect(tallyMarks.parse('||||/')).toBe(5);
//     expect(tallyMarks.parse('||||/||||/||')).toBe(12);
//     expect(tallyMarks.parse('||||/||||/||||/||||/||||')).toBe(24);
//   });
// });
