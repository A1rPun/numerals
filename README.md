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
- devanagari
- duodecimal
- etruscan
- gujarati
- gurmukhi
- hebrew
- kannada
- khmer
- lao
- malayalam
- odia
- persian (dari, pashto)
- roman
- tally marks
- tamil
- telugu
- thai
- tibetan

## TODO

- Fractions
- Error handling for valid input (Garbage in garbage out for now)

- parseAttic
- parseBabylonian
- parseChuvash
- parseHebrew
- parseTallyMarks

### Systems

- Abjad https://en.wikipedia.org/wiki/Abjad_numerals
- Brahmi https://en.wikipedia.org/wiki/Brahmi_numerals
- Chinese https://en.wikipedia.org/wiki/Chinese_numerals
- Cyrillic / Glagolitic https://en.wikipedia.org/wiki/Cyrillic_numerals
- Egyptian https://en.wikipedia.org/wiki/Egyptian_numerals
- Ge'ez https://en.wikipedia.org/wiki/Ge%CA%BDez_script#Numerals
- Japanese https://en.wikipedia.org/wiki/Japanese_numerals
- Korean https://en.wikipedia.org/wiki/Korean_numerals
- Maya https://en.wikipedia.org/wiki/Maya_numerals
- Phoenician https://en.wikipedia.org/wiki/Phoenician_alphabet#Numerals

```javascript
const brahmi = [
  ['𑁒', '𑁓', '𑁔', '𑁕', '𑁖', '𑁗', '𑁘', '𑁙', '𑁚'],
  ['𑁛', '𑁜', '𑁝', '𑁞', '𑁟', '𑁠', '𑁡', '𑁢', '𑁣'],
  ['𑁤', '𑁥'],
];
```

### Improvements

- Asian - use 10, 100, 1000 signs
- Chuvash - Need a better 1, 10 and 50 (50 needs to be upside down)
- Hebrew - Not all numbers supported between 1-999
- Malayalam - 10, 100, 1000 as ൰, ൱, ൲
- Tally marks - better implementation
- Tamil - 10, 100, 1000 as ௰, ௱, ௲
- Duodecimal - Fallback on ⵒ/Ɛ or X/E
