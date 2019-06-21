import { createAlphabeticNumeral } from './common';

export const {
  parse: parseGlagolitic,
  to: toGlagolitic,
} = createAlphabeticNumeral([
  ['', 'Ⰰ', 'Ⰱ', 'Ⰲ', 'Ⰳ', 'Ⰴ', 'Ⰵ', 'Ⰶ', 'Ⰷ', 'Ⰸ'], // ones
  ['', 'Ⰺ', 'Ⰻ', 'Ⰼ', 'Ⰽ', 'Ⰾ', 'Ⰿ', 'Ⱀ', 'Ⱁ', 'Ⱂ'], // tens Ⰹ = 10
  ['', 'Ⱃ', 'Ⱄ', 'Ⱅ', 'Ⱆ', 'Ⱇ', 'Ⱈ', 'Ⱉ', 'Ⱋ', 'Ⱌ'], // hundreds
  ['', 'Ⱍ', 'Ⱎ', 'Ⱏ', 'Ⱑ', 'Ⱓ', 'Ⱗ', '', '', ''], // thousands Ⱐ = 3000
]);
