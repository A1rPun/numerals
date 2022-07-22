import { parseBase, normalizeString } from './common';

export class SimpleNumberConverter {
  // TODO: negative = 0x2d, fraction = 0x2e
  constructor(codepointzero, surrogate = 0) {
    this.codepointzero = codepointzero;
    this.surrogate = surrogate;
  }

  parse(str) {
    return parseBase(
      normalizeString(str, this.surrogate).map(x => {
        const num = x.codePointAt(0) - this.codepointzero;
        return num >= 0 && num < 10 ? num : x;
      }).join``
    );
  }

  to(n) {
    return n.toString().split``.map(x => {
      const num = parseBase(x);
      return isNaN(num) ? x : String.fromCodePoint(this.codepointzero + num);
    }).join``;
  }
}
