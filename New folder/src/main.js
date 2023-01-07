const generateQuery = require('./functions/generateQuery');

console.log('MAGIC QUERY BUILDER');

const demo_inp = [
  // 'user.name.firstName=maaz',
  // 'user.name.lastName=ahmed',
  // 'interests.[].sports.name=football',
  'indredients.[].milk.[].cal=10'
];

//input function
const input_func = list => {
  const result = generateQuery(list);
  console.log(JSON.stringify(result));

  // for output query
  const newObj = new Object(result.__query__);
};

input_func(demo_inp);
