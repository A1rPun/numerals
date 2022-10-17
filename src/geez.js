import { createAlphabeticNumeral } from './common.js';

export default createAlphabeticNumeral([
  ['', '፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱'], // ones
  ['', '፲', '፳', '፴', '፵', '፶', '፷', '፸', '፹', '፺'], // tens
], x => '፻'.repeat(x));
