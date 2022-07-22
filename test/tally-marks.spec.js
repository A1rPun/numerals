import { toTallyMarks, parseTallyMarks } from '../main.js';
import { toChineseTallyMarks, parseChineseTallyMarks } from '../main.js';

describe('Tally Marks', () => {
  it('should convert a number to tally marks', () => {
    expect(toTallyMarks(5)).toBe('𝍸');
    expect(toTallyMarks(12)).toBe('𝍸𝍸𝍪');
    expect(toTallyMarks(24)).toBe('𝍸𝍸𝍸𝍸𝍬');
  });

  it('should convert tally marks to a number', () => {
    expect(parseTallyMarks('𝍸')).toBe(5);
    expect(parseTallyMarks('𝍸𝍸𝍪')).toBe(12);
    expect(parseTallyMarks('𝍸𝍸𝍸𝍸𝍬')).toBe(24);
  });
});

describe('Tally Marks Chinese', () => {
  it('should convert a number to tally marks', () => {
    expect(toChineseTallyMarks(5)).toBe('𝍶');
    expect(toChineseTallyMarks(12)).toBe('𝍶𝍶𝍳');
    expect(toChineseTallyMarks(24)).toBe('𝍶𝍶𝍶𝍶𝍵');
  });

  it('should convert tally marks to a number', () => {
    expect(parseChineseTallyMarks('𝍶')).toBe(5);
    expect(parseChineseTallyMarks('𝍶𝍶𝍳')).toBe(12);
    expect(parseChineseTallyMarks('𝍶𝍶𝍶𝍶𝍵')).toBe(24);
  });
});

// describe('Tally Marks Old', () => {
//   it('should convert a number to tally marks', () => {
//     expect(toTallyMarks(5)).toBe('||||/');
//     expect(toTallyMarks(12)).toBe('||||/||||/||');
//     expect(toTallyMarks(24)).toBe('||||/||||/||||/||||/||||');
//   });

//   it('should convert tally marks to a number', () => {
//     expect(parseTallyMarks('||||/')).toBe(5);
//     expect(parseTallyMarks('||||/||||/||')).toBe(12);
//     expect(parseTallyMarks('||||/||||/||||/||||/||||')).toBe(24);
//   });
// });
