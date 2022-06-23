//Purify
const assoc = (key, value, object) => {
  object[key] = value;
};


//Purify w One Line
const getNames = (users) => {
  console.log('getting names!');
  
  return users.map((user) => user.name);
};


//Purify
const append = (item, list) => {
  list.push(item);
  
  return list;
};

//Purify
const sortAscending = (numbers) => numbers
  .sort((a, b) => a > b);