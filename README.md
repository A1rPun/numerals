# Numerals

> Numerals of the world. Convert western arabic to any numeral system and vice versa.

## Supported systems

- aegean
- arabic eastern
- armenian
- asian eastern (chinese, japanese, korean, vietnamese)
- asian formal
- attic (greek, herodianic, acrophonic)
- babylonian
- bengali
- bijective
- burmese
- chuvash
- counting rods
- cyrillic
- devanagari
- duodecimal
- egyptian
- etruscan
- ge'ez
- georgian
- glagolitic
- greek (ionic, ionian, milesian, alexandrian)
- gujarati
- gurmukhi
- hebrew
- kannada
- kharosthi
- khmer
- lao
- malayalam
- mongolian
- odia
- persian (dari, pashto)
- phoenician
- roman
- tally marks
- tamil
- telugu
- thai
- tibetan

## TODO

- https://www.convert-me.com/en/convert/hex_octal_binary_roman/numdec.html?u=numdec&v=1
- https://en.wikipedia.org/wiki/List_of_numbers_in_various_languages
- Implement -> throw Error('Not implemented');
- Fractions
- Error handling for valid input (Garbage in garbage out for now)

### Systems

- Abjad https://en.wikipedia.org/wiki/Abjad_numerals
- Brahmi https://en.wikipedia.org/wiki/Brahmi_numerals
- Maya https://en.wikipedia.org/wiki/Maya_numerals
- Roman -> apostrophus, vinculum

```javascript
const brahmi = [
  ['𑁒', '𑁓', '𑁔', '𑁕', '𑁖', '𑁗', '𑁘', '𑁙', '𑁚'],
  ['𑁛', '𑁜', '𑁝', '𑁞', '𑁟', '𑁠', '𑁡', '𑁢', '𑁣'],
  ['𑁤', '𑁥'],
];
```

### Improvements

- Armenian - Writing numbers greater than 9999 is done by drawing a line over them, indicating their value is to be multiplied by 10000.
- Asian - use 10, 100, 1000 signs (https://en.wikipedia.org/wiki/Korean_numerals)
- Chuvash - Need a better 1, 10 and 50 (50 needs to be upside down)
- Duodecimal - Fallback on ⵒ/Ɛ or X/E
- Ge'ez - ፼ = 10000
- Hebrew - Not all numbers supported between 1-999
- Malayalam - 10, 100, 1000 as ൰, ൱, ൲
- Tally marks - better implementation /|||| /||
- Tamil - 10, 100, 1000 as ௰, ௱, ௲
- Roman / Cyrillic / Kharosthi String.repeat need better implementation
