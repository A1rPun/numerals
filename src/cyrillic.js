import { createAlphabeticNumeral } from './common';

export const {
  parse: parseCyrillic,
  to: toCyrillic,
} = createAlphabeticNumeral([
  ['', 'А', 'В', 'Г', 'Д', 'Е', 'Ѕ', 'З', 'И', 'Ѳ'], // ones
  ['', 'І', 'К', 'Л', 'М', 'Н', 'Ѯ', 'О', 'П', 'Ч'], // tens Ҁ = 90
  ['', 'Р', 'C', 'T', 'Ѵ', 'Ф', 'Х', 'Ѱ', 'Ѡ', 'Ц'], // hundreds Ѧ = 900
], x => '҂'.repeat(x));
