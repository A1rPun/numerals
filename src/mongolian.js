import { createNumeral } from './common';

export const {
  parse: parseMongolian,
  to: toMongolian,
} = createNumeral(['᠐', '᠑', '᠒', '᠓', '᠔', '᠕', '᠖', '᠗', '᠘', '᠙']);
