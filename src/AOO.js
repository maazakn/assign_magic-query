console.log('TEST!');

const isObject = value => {
  return !!(value && typeof value === 'object' && !Array.isArray(value));
};

const isArray = value => {
  return !!(value && Array.isArray(value));
};

let itrateOn = [];

const findNestedObject = (object = {}, keyToMatch = '', valueToMatch = '') => {
  const ISOBJECT = isObject(object);
  if (ISOBJECT) {
    itrateOn = Object.entries(object);
  } else if (isArray(object)) {
    itrateOn = object.map(obj => Object.entries(obj)[0]);
  }

  //   interator
  for (let i = 0; i < itrateOn.length; i += 1) {
    const [key, value] = itrateOn[i];

    //   found
    if (key === keyToMatch) {
      object[key] = valueToMatch;
      return ISOBJECT ? object : { [key]: value };
    } else if (isObject(value) || isArray(value)) {
      const child = findNestedObject(value, keyToMatch, valueToMatch);
      if (child !== null) {
        return child;
      }
    }
  }

  //   not found
  return null;
};

const obj = {
  product_Name: 'MILKY',
  indredients: [
    {
      cal: '10'
    },
    {
      pot: '100'
    },
    {
      tomoto: '1000'
    }
  ]
};

const obssj = {
  product_Name: 'MILKY',
  indredients: [
    {
      milk: [
        {
          cal: '10'
        }
      ]
    }
  ]
};

node = findNestedObject(obssj, 'cal', ' 1000 ');
node = 'Calcium updated';
console.log('MATCH:  ', JSON.stringify(obssj));
