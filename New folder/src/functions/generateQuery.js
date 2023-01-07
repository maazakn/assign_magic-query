const getAOP = require('../helper/getAOP');
const getValue = require('../helper/getValue');
const makeNestObj = require('../helper/makeNestObj');
const removeSpace = require('../helper/removeSpace');

const generateQuery = list_of_queryFilters => {
  const templateObj = {
    __query__: {}
  };

  const makeQuery = inpStr =>
    makeNestObj(templateObj.__query__, getAOP(inpStr), getValue(inpStr));

  list_of_queryFilters.forEach(inp => makeQuery(removeSpace(inp)));

  return templateObj;
};

module.exports = generateQuery;
