export function createSpokenNumeral(wordsToNumbers, numbersToWords) {
  return {
    parse: (str) => parseSpoken(wordsToNumbers, str),
    to: (n) => toSpoken(numbersToWords, n),
  };
}

function toSpoken(n) {
  const negativeN = n < 0;
  let result = [];

  if (negativeN) {
    result.push(negative);
    n = n * -1; // math.abs
  }
  const numberParts = n.toString().split('.');
  const number = chunk(numberParts[0])
    .map(toDutchPart)
    .filter(x => x)
    .reverse();
  result = result.concat(number);

  if (numberParts.length > 1) {
    result.push(divider);
    const decimals = [...numberParts[1]]
      .map(x => numbers[0][x]);
    result = result.concat(decimals);
  }

  return result.join(' ');
}

function parseSpoken(str) {
  return 0; 
}

function chunk(source, size = 3) {
  let chunks = [];
  let chunk = '';
  let count = 0;

  for (let i = source.length; i--;) {
    chunk += source[i];
    count++;

    if (size === count) {
      chunks.push(chunk);
      count = 0;
      chunk = '';
    }
  }

  if (chunk.length) chunks.push(chunk);
  return chunks;
}
