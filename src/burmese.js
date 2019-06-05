import { parseNumeral, toNumeral } from './common';

const burmese = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

export function parseBurmese(str) {
  return parseNumeral(str, burmese);
}
export function toBurmese(n) {
  return toNumeral(n, burmese);
}
