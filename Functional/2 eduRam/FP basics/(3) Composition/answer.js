//Make a function that uppercases and reverses ONE name
const bobo = {
  firstName: 'Bobo',
  lastName: 'Flakes'
};

//My Solution
const getFirstName = obj => obj.firstName;
const upperCase = string => string.toUpperCase();

let upperAndReverseFirstName = (object) => {
    const upName = upperCase(getFirstName(object));
    return upName.split('').reverse().join('');
}

const result = upperAndReverseFirstName(bobo);
console.log({ result })

/*Educative's solution
const getFirstName = (user) => user.firstName;
const uppercaseString = (string) => string.toUpperCase();
const reverseString = (string) => string
  .split('')
  .reverse()
  .join('');

const upperAndReverseFirstName = (user) => {
  const name = getFirstName(user);
  const uppercasedName = uppercaseString(name);
  
  return reverseString(uppercasedName);
};*/





//Make a function that uppercases and reverses MULTIPLE names
const users = [{
  firstName: 'Bobo',
  lastName: 'Flakes'
}, {
  firstName: 'Lawrence',
  lastName: 'Shilling'
}, {
  firstName: 'Anon',
  lastName: 'User'
}];

reverseString = string => {
    return string.split('').reverse().join('');
}


let upperAndReverseFirstName2 = (list) => {
    const firstNames = list.map(obj => reverseString(upperCase(obj.firstName)));        //too nested. Educative's solution was better it was simpler and reused functionality
    return firstNames;
}


// Expected Output: ['OBOB', 'ECNERWAL', 'NONA']
const result2 = upperAndReverseFirstName2(users);
console.log(result2);



/*Educative's solution
const getFirstName = (user) => user.firstName;
const uppercaseString = (string) => string.toUpperCase();
const reverseString = (string) => string
  .split('')
  .reverse()
  .join('');

const upperAndReverseFirstName = (user) => {
  const name = getFirstName(user);
  const uppercasedName = uppercaseString(name);
  
  return reverseString(uppercasedName);
};


const upperAndReverseFirstNames = (users) => {
  return users.map(upperAndReverseFirstName);
}

*/