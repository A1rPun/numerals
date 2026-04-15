import { dutch } from '../numerals.js';

describe('Dutch', () => {
  it('should convert a number to spoken dutch', () => {
    expect(dutch.to(0)).toBe('nul');
    expect(dutch.to(2)).toBe('twee');
    expect(dutch.to(10)).toBe('tien');
    expect(dutch.to(11)).toBe('elf');
    expect(dutch.to(19)).toBe('negentien');
    expect(dutch.to(20)).toBe('twintig');
    expect(dutch.to(22)).toBe('tweeëntwintig');
    expect(dutch.to(29)).toBe('negenentwintig');
    expect(dutch.to(33)).toBe('drieëndertig');
    expect(dutch.to(64)).toBe('vierenzestig');
    expect(dutch.to(88)).toBe('achtentachtig');
    expect(dutch.to(100)).toBe('honderd');
    expect(dutch.to(555)).toBe('vijfhonderdvijfenvijftig');
    expect(dutch.to(1_000)).toBe('duizend');
    expect(dutch.to(100_000)).toBe('honderdduizend');
    expect(dutch.to(1_000_000)).toBe('miljoen');
    expect(dutch.to(102_000_000)).toBe('honderdtwee miljoen');
    expect(dutch.to(222_222_222)).toBe('tweehonderdtweeëntwintig miljoen tweehonderdtweeëntwintigduizend tweehonderdtweeëntwintig');
  });

  it('should convert a negative number to spoken dutch', () => {
    expect(dutch.to(-0)).toBe('nul');
    expect(dutch.to(-2)).toBe('min twee');
    expect(dutch.to(-10)).toBe('min tien');
  });

  it('should convert a floating number to spoken dutch', () => {
    expect(dutch.to(0.0)).toBe('nul');
    expect(dutch.to(0.3)).toBe('nul komma drie');
    expect(dutch.to(5.5)).toBe('vijf komma vijf');
    expect(dutch.to(3.56)).toBe('drie komma vijf zes');
  });

  it('should convert dutch text to a number', () => {
    expect(dutch.parse('nul')).toBe(0);
    expect(dutch.parse('twee')).toBe(2);
    expect(dutch.parse('tien')).toBe(10);
  });
});

