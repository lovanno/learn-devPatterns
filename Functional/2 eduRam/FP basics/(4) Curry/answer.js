//Exercise 1
const countBobos = R.curry(function(test){
    return R.test(/bobo/ig, test)
})

console.log(countBobos("Bobo went to the store"));
console.log(countBobos("Who went to the store?"))
console.log(countBobos("bobo did."))
console.log(countBobos("I did not know that!"))
console.log(countBobos("Well now you know."))



/*Exercise 2 -- I couldn't solve this one. I didn't know how to test logic without parameters 
but the solution shows that parameters can be used. They just need to be inside an inner function  */

// Even though the two inner functions show a person
// parameter, shouldCode() itself is still point-free.
// Each function's independently judged from the others.
/*const shouldCode = R.ifElse(
  where({
	lovesTech: equals(true),
  	worksHard: equals(true),
  }),
  (person) => `${person.name} may enjoy a tech career!`,
  (person) => `${person.name} wouldn't enjoy a tech career.`
);*/



// Exercise 3 - Correct 
const getAges = R.pluck('age');

/*Educative's answer: 
const getAges1 = map(prop('age')); // And you'd be correct :D

const getAges2 = pluck('age'); // But this works too */


// Exercise 4 -- My Attempt
const atLeast18 = number => number >= 18;   //EduRam uses gte and lte. I didn't know they existed 
const lessThan25 = number => number <=25;   //but knew it was a neccessary step
const getAge = R.pluck('age');  //Instead, they use propSatisfies and make it a condition. Smart

/*const keepYoungAdults = ifElse(
    where({
        atLeast18: equals(True),
        lessThan25: equals(true)
    }),
    getAge(list),
);

/*Educative's answer: 
const youngAdultAge = both(gte(18), lte(25));
const isYoungAdult = propSatisfies(youngAdultAge, 'age');
const keepYoungAdults1 = filter(isYoungAdult);

// You can also apply the opposite logic with reject()
const notYoungAdultAge = either(gt(18), lt(25));
const isNotYoungAdult = propSatisfies(notYoungAdultAge, 'age');
const keepYoungAdults2 = reject(isNotYoungAdult);
*/


/*Exercise 5 -- My Attempt. I thought showing parameters wasn't acceptable but I guess it depends. I will have research for a better understanding

const validVal = R.where({isNill: equals(false)})          
const defaultVal = propSatisfies(validVal, 'Bobo')      //Setting defaultVal to Bobo. But it should've been curried w a param to allow reusability. 

const defaultTo = R.ifElse(
    where({
        validVal: equals(True),
    }),
    defaultVal,
    (person) => person 
);

*/


//Educative's Answer
const defaultTo = R.curry((defaultVal, val) => val == null ? defaultVal : val);


const defaultToBobo = defaultTo('Bobo');

defaultToBobo(null); // 'Bobo'

console.log(defaultToBobo(null));
defaultToBobo('Patrick'); // 'Patrick'






