import { createNumeral } from './common';

export const {
  parse: parseTibetan,
  to: toTibetan,
} = createNumeral(['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩']);
