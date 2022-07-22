import { fullWidth, mathematicalBold, mathematicalMonospace } from '../main.js';

describe('Common lib', () => {
  it('Full width', () => {
    expect(fullWidth.to(42)).toBe('４２');
    expect(fullWidth.parse('４２')).toBe(42);
  });

  it('Mathematical Bold', () => {
    expect(mathematicalBold.to(42)).toBe('𝟒𝟐');
    expect(mathematicalBold.parse('𝟒𝟐')).toBe(42);
  });

  it('Mathematical Bold negative & fraction', () => {
    expect(mathematicalBold.to(-4.2)).toBe('-𝟒.𝟐');
    expect(mathematicalBold.parse('-𝟒.𝟐')).toBe(-4.2);
  });

  it('Mathematical Bold scientific', () => {
    expect(mathematicalBold.to(13e7)).toBe('𝟏𝟑𝟎𝟎𝟎𝟎𝟎𝟎𝟎');
    expect(mathematicalBold.parse('𝟏𝟑e𝟕')).toBe(13e7);
  });

  it('Mathematical Monospace', () => {
    expect(mathematicalMonospace.to(42)).toBe('𝟺𝟸');
    expect(mathematicalMonospace.parse('𝟺𝟸')).toBe(42);
  });
});
