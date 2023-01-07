// delimeters
const DOT = '.',
  startSquare = '[',
  closeSquare = ']',
  SquareBracket = '[]',
  EQUAL = '=';

// replace values
const arrayMatch = '__match__',
  equalMatch = '__eq__';

const additionalSplit = (array, st) => {
  let i = 0,
    pointer = 0;
  while (i < st.length) {
    if (st[i] === EQUAL && st[i - 1] !== closeSquare) {
      array.push(st.slice(pointer, i));
    } else if (st[i] === startSquare && st[i + 1] === closeSquare) {
      array.push(arrayMatch);
      i += 1;
      pointer = i + 2;
    } else if (st[i] === EQUAL) {
      array.push(equalMatch);
      pointer = i + 1;
    }
    i += 1;
  }
};

const getAOP = str => {
  const arr = [];

  str.split(DOT).forEach((item, i) => {
    if (item === SquareBracket) arr.push(arrayMatch);
    else if (item === EQUAL) arr.push(equalMatch);
    else if (/[\[\]\=]/.test(item)) {
      additionalSplit(arr, item);
    } else arr.push(item);
  });

  return arr;
};

module.exports = getAOP;
