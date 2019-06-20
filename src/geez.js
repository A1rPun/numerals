import { createAlphabeticNumeral } from './common';

export const {
  parse: parseGeez,
  to: toGeez,
} = createAlphabeticNumeral([
  ['', '፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱'], // ones
  ['', '፲', '፳', '፴', '፵', '፶', '፷', '፸', '፹', '፺'], // tens
], x => '፻'.repeat(x));
