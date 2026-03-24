import { chinese } from '../numerals.js';

describe('Simplified Chinese', () => {
  it('should convert a number to asian numerals', () => {
    expect(chinese.to(0.1)).toBe('零');
    expect(chinese.to(0)).toBe('零');
    expect(chinese.to(1)).toBe('一');
    expect(chinese.to(10)).toBe('十');
    expect(chinese.to(17)).toBe('十七');
    expect(chinese.to(109)).toBe('一百零九');
    expect(chinese.to(117)).toBe('一百一十七');
    expect(chinese.to(250)).toBe('兩百五十');
    expect(chinese.to(666)).toBe('六百六十六');
    expect(chinese.to(2900)).toBe('兩千九百');
    expect(chinese.to(1_0000)).toBe('一万');
    expect(chinese.to(1_0001)).toBe('一万零一');
    expect(chinese.to(1_0101)).toBe('一万零一百零一');
    expect(chinese.to(2_0222)).toBe('兩万零兩百二十二');
    expect(chinese.to(10_0000)).toBe('十万');
    expect(chinese.to(20_0000)).toBe('二十万');
    expect(chinese.to(222_0000)).toBe('二百二十兩万');
    expect(chinese.to(10_0000_0000)).toBe('十亿');
    expect(chinese.to(222_0000_0000)).toBe('二百兩十兩亿');
    expect(chinese.to(2222_0000_0000)).toBe('二千二百兩十兩亿');
    expect(chinese.to(22_0000_0000_0000)).toBe('兩十兩兆亿');
    expect(chinese.to(2222_2222_2222_2222)).toBe('二千兩百兩十兩兆二千二百兩十兩亿兩千二百二十兩万兩千兩百二十二');
    expect(chinese.to(Number.MAX_SAFE_INTEGER)).toBe('九千零七兆一千九百九十兩亿五千四百七十四万零九百九十一');
  });

  it('should convert text to a number', () => {
    expect(chinese.parse('零')).toBe(0);
    expect(chinese.parse('一')).toBe(1);
    expect(chinese.parse('十')).toBe(10);
    expect(chinese.parse('十七')).toBe(17);
    expect(chinese.parse('一百零九')).toBe(109);
    expect(chinese.parse('一百一十七')).toBe(117);
    expect(chinese.parse('兩百五十')).toBe(250);
    expect(chinese.parse('六百六十六')).toBe(666);
    expect(chinese.parse('一千八百')).toBe(1800);
    expect(chinese.parse('二千九百')).toBe(2900);
    // expect(chinese.parse('一万')).toBe(1_0000);
    // expect(chinese.parse('一万零一')).toBe(1_0001);
    // expect(chinese.parse('一万零一百零一')).toBe(1_0101);
    // expect(chinese.parse('兩万零兩百二十二')).toBe(2_0222);
    // expect(chinese.parse('十万')).toBe(10_0000);
    // expect(chinese.parse('二十万')).toBe(20_0000);
    // expect(chinese.parse('十亿')).toBe(10_0000_0000);
    // expect(chinese.parse('二千兩百兩十兩兆二千二百兩十兩亿兩千二百二十兩万兩千兩百二十二')).toBe(2222_2222_2222_2222);
    // expect(chinese.parse('九千零七兆一千九百九十兩亿五千四百七十四万零九百九十一')).toBe(Number.MAX_SAFE_INTEGER);
  });
});
