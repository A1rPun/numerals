# Numerals

> Numerals of the world. Convert western arabic to any numeral system and vice versa.

## Supported systems

- aegean
- arabic eastern
- asian eastern (chinese, japanese, korean)
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
- georgian
- glagolitic
- gujarati
- gurmukhi
- hebrew
- kannada
- khmer
- lao
- malayalam
- mongolian
- odia
- persian (dari, pashto)
- roman
- tally marks
- tamil
- telugu
- thai
- tibetan

## TODO

- https://en.wikipedia.org/wiki/List_of_numbers_in_various_languages
- Fractions
- Error handling for valid input (Garbage in garbage out for now)

- parseAttic
- parseBabylonian
- parseChuvash
- parseCyrillic
- parseEgyptian
- parseEtruscan
- parseGeorgian
- parseGlagolitic
- parseHebrew
- parseTallyMarks

### Systems

- Abjad https://en.wikipedia.org/wiki/Abjad_numerals
- Ancient greek
- Brahmi https://en.wikipedia.org/wiki/Brahmi_numerals
- Ge'ez https://en.wikipedia.org/wiki/Ge%CA%BDez_script#Numerals
- Maya https://en.wikipedia.org/wiki/Maya_numerals
- Phoenician https://en.wikipedia.org/wiki/Phoenician_alphabet#Numerals
- Kharosthi https://en.wikipedia.org/wiki/Kharosthi#Numerals

```javascript
const brahmi = [
  ['𑁒', '𑁓', '𑁔', '𑁕', '𑁖', '𑁗', '𑁘', '𑁙', '𑁚'],
  ['𑁛', '𑁜', '𑁝', '𑁞', '𑁟', '𑁠', '𑁡', '𑁢', '𑁣'],
  ['𑁤', '𑁥'],
];
const kharosthi = ['𐩀', '𐩁', '𐩂', '𐩃', '𐩄', '𐩅', '𐩆', '𐩇']; // 1 2 3 4 10 20 100 1000
```

### Improvements

- Asian - use 10, 100, 1000 signs (https://en.wikipedia.org/wiki/Korean_numerals)
- Chuvash - Need a better 1, 10 and 50 (50 needs to be upside down)
- Hebrew - Not all numbers supported between 1-999
- Malayalam - 10, 100, 1000 as ൰, ൱, ൲
- Tally marks - better implementation
- Tamil - 10, 100, 1000 as ௰, ௱, ௲
- Duodecimal - Fallback on ⵒ/Ɛ or X/E
- Roman / Cyrillic String.repeat need better implementation
