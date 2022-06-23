const assoc = (key, value, object) => {
  let copy = structuredClone(object[key]);
  copy = value;
  return copy
};

/* Educative's Answer
const assoc = (key, value, object) => ({
  ...object,
  [key]: value
});*/


const getNames = (users) => {  
  return users.map((user) => user.name);
};


const append = (item, list) => { [...list, item]};

const sortAscending = (numbers) => [...numbers].sort((a, b) => a > b);