console.log('TEST');

const isObject = value => {
  return !!(value && typeof value === 'object' && !Array.isArray(value));
};

const isArray = value => {
  return !!(value && Array.isArray(value));
};

const findNestedObject = (object = {}, keyToMatch = '', valueToMatch = '') => {
  if (isObject(object)) {
    const entries = Object.entries(object);

    for (let i = 0; i < entries.length; i += 1) {
      const [objectKey, objectValue] = entries[i];

      console.log(entries);

      if (objectKey === keyToMatch) {
        return object;
      }

      if (isObject(objectValue)) {
        const child = findNestedObject(objectValue, keyToMatch, valueToMatch);

        if (child !== null) {
          return child;
        }
      } else if (isArray(objectValue)) {
        console.log('Object arr: ', objectValue);
        const child = findNestedObject(objectValue, keyToMatch, valueToMatch);

        if (child !== null) {
          return child;
        }
      }
    }
  }

  return null;
};

const query = {
  indredients: {
    __match__: {
      milk: {
        __match__: {
          cal: '10'
        }
      }
    }
  }
};

const obj = {
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

const oobj = {
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

const match = findNestedObject(oobj, 'cal', '');
console.log(match);
