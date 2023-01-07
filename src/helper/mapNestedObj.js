const mapNestedObj = obj => {
  for (key in obj) {
    if (typeof obj[key] === 'object') {
      outQuery(obj[key]);
    }
  }
};
