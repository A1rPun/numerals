import { parseBase, normalizeString } from './common';

class SimpleNumberConverter {
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

// Sorted on code point
// export const ascii = new SimpleNumberConverter(0x30);
export const arabicIndic = new SimpleNumberConverter(0x0660);
export const extendedArabicIndic = new SimpleNumberConverter(0x06f0); // Persian
export const nko = new SimpleNumberConverter(0x07c0);
export const devanagari = new SimpleNumberConverter(0x0966);
export const bengali = new SimpleNumberConverter(0x09e6);
export const gurmukhi = new SimpleNumberConverter(0x0a66);
export const gujarati = new SimpleNumberConverter(0x0ae6);
export const oriya = new SimpleNumberConverter(0x0b66); // Odia
export const tamil = new SimpleNumberConverter(0x0be6);
export const telugu = new SimpleNumberConverter(0x0c66);
export const kannada = new SimpleNumberConverter(0x0ce6);
export const malayam = new SimpleNumberConverter(0x0d66);
export const sinhalaLith = new SimpleNumberConverter(0x0de6);
export const thai = new SimpleNumberConverter(0x0e50);
export const lao = new SimpleNumberConverter(0x0ed0);
export const tibetan = new SimpleNumberConverter(0x0f20);
export const myanmar = new SimpleNumberConverter(0x1040); // Burmese
export const myanmarShan = new SimpleNumberConverter(0x1090);
export const khmer = new SimpleNumberConverter(0x17e0);
export const mongolian = new SimpleNumberConverter(0x1810);
export const limbu = new SimpleNumberConverter(0x1946);
export const newTaiLue = new SimpleNumberConverter(0x19d0);
export const taiThamHora = new SimpleNumberConverter(0x1a80);
export const taiThamTham = new SimpleNumberConverter(0x1a90);
export const balinese = new SimpleNumberConverter(0x1b50);
export const sundanese = new SimpleNumberConverter(0x1bb0);
export const lepcha = new SimpleNumberConverter(0x1c40);
export const olChiki = new SimpleNumberConverter(0x1c50);
export const vai = new SimpleNumberConverter(0xa620);
export const saurashtra = new SimpleNumberConverter(0xa8d0);
export const kayahLi = new SimpleNumberConverter(0xa900);
export const javanese = new SimpleNumberConverter(0xa9d0);
export const myanmarTaiLaing = new SimpleNumberConverter(0xa9f0);
export const cham = new SimpleNumberConverter(0xaa50);
export const meeteiMayek = new SimpleNumberConverter(0xabf0);
export const fullWidth = new SimpleNumberConverter(0xff10);
// TODO: Check surrogates
export const osmanya = new SimpleNumberConverter(0x104a0);
export const hanifiRohingya = new SimpleNumberConverter(0x10d30);
export const brahmi = new SimpleNumberConverter(0x11066);
export const soraSompeng = new SimpleNumberConverter(0x110f0);
export const chakma = new SimpleNumberConverter(0x11136);
export const sharada = new SimpleNumberConverter(0x111d0);
export const khudawadi = new SimpleNumberConverter(0x112f0);
export const newa = new SimpleNumberConverter(0x11450);
export const trihuta = new SimpleNumberConverter(0x114d0);
export const modi = new SimpleNumberConverter(0x11650);
export const takri = new SimpleNumberConverter(0x116c0);
export const ahom = new SimpleNumberConverter(0x11730);
export const warangCiti = new SimpleNumberConverter(0x118e0);
export const bhaisuki = new SimpleNumberConverter(0x11c50);
export const masaramGondi = new SimpleNumberConverter(0x11d50);
export const gunjalaGondi = new SimpleNumberConverter(0x11da0);
export const mro = new SimpleNumberConverter(0x16a60);
export const pahawhHmong = new SimpleNumberConverter(0x16b50);
export const mathematicalBold = new SimpleNumberConverter(0x1d7ce, 0xd835);
export const mathematicalDoubleStruck = new SimpleNumberConverter(0x1d7d8, 0xd835);
export const mathematicalSansSerif = new SimpleNumberConverter(0x1d7e2, 0xd835);
export const mathematicalSansSerifBold = new SimpleNumberConverter(0x1d7ec, 0xd835);
export const mathematicalMonospace = new SimpleNumberConverter(0x1d7f6, 0xd835);
export const nyiakengPuachueHmong = new SimpleNumberConverter(0x1e140);
export const wancho = new SimpleNumberConverter(0x1e2f0);
export const adlam = new SimpleNumberConverter(0x1e950);
