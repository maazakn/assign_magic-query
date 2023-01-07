const generateQuery = require('./functions/generateQuery');

console.log('MAGIC QUERY BUILDER');

const demo_inp = [
  // 'user.name.firstName=maaz',
  // 'user.name.lastName=ahmed',
  // 'interests.[].sports.name=football',
  'indredients.[].milk.[].cal=10'
];

// equality check
const checkEquality = obj => {
  if (Object.keys(obj)[0] === '__eq__') {
    return Object.values(obj)[0];
  }

  return obj;
};

const array = [];
let i = 0;
let newObject = {};
const outQuery = obj => {
  for (key in obj) {
    if (key === '__match__') {
      lastIndex = i - 1;
      if (newObject[array[lastIndex]]) {
        newObject[array[lastIndex]] = [checkEquality(obj[key])];
      } else {
        const vals = Object.values(newObject)[0][0];
        vals[array[lastIndex]] = [checkEquality(obj[key])];
      }
      console.log(' key: ', obj[key]);
    } else {
      array.push(key);
      i += 1;
    }

    if (typeof obj[key] === 'object') {
      outQuery(obj[key]);
    }

    // console.log('end:  ', obj, ' key ', key);
  }
};

//input function
const input_func = list => {
  const result = generateQuery(list);
  console.log(JSON.stringify(result));

  const newObj = new Object(result.__query__);
  newObject = new Object(result.__query__);

  outQuery(newObj);

  console.log('out: ', JSON.stringify(newObject));
};

// output function
input_func(demo_inp);
