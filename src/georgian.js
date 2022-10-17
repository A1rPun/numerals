// const georgianDecimalSeparator = ','
import { createAlphabeticNumeral } from './common.js';

export default createAlphabeticNumeral([
  ['', 'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'ჱ', 'თ'], // ones
  ['', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ჲ', 'ო', 'პ', 'ჟ'], // tens
  ['', 'რ', 'ს', 'ტ', 'ჳ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ'], // hundreds უ = 400
  ['', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჴ', 'ჯ', 'ჰ'], // thousands
], x => 'ჵ'.repeat(x));
