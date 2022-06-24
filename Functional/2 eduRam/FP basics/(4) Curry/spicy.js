//Exercise 1 - Rewrite it (Point-free doesn't make sense in this case)
const countBobos = R.curry(function(test){
    return /bobo/ig.test(test)
})

console.log(countBobos("Bobo went to the store"));
console.log(countBobos("Who went to the store?"))
console.log(countBobos("bobo did."))
console.log(countBobos("I did not know that!"))
console.log(countBobos("Well now you know."))


/*Exercise 2 - This code tells you if someone should consider a tech career. Refactor it to be point-free.
https://ramdajs.com/docs/#ifElse
https://ramdajs.com/docs/#where*/

const shouldCode = (person) => (
  person.lovesTech && person.worksHard ?
    `${person.name} may enjoy a tech career!` :
    `${person.name} wouldn't enjoy a tech career.`
);


/*Exercise 3 - This code returns everyone’s age. Refactor it to be point-free.
https://ramdajs.com/docs/#map
https://ramdajs.com/docs/#prop
https://ramdajs.com/docs/#pluck */

const getAges = (people) => people.map((person) => person.age);



/* Exercise 4 - This code rejects everyone under 18, and over 25. Refactor it to be point-free.
https://ramdajs.com/docs/#filter
https://ramdajs.com/docs/#propSatisfies */

const keepYoungAdults = (people) => people.filter((p) => (
  p.age >= 18 && p.age <= 25
));



/*Exercise 5#
Create a function called defaultTo. It takes two parameters:

defaultVal: A default value
val: The value to return
If val is null or undefined, return defaultVal.
Else, return val.

Curry it to allow preloading arguments. */
const defaultToBobo = defaultTo('Bobo');

defaultToBobo(null); // 'Bobo'
defaultToBobo('Patrick'); // 'Patrick'