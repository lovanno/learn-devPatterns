//Exercise 1 - Correct Answer: '$36.41'

//My Solution - The biggest struggle I have is not knowing rambda's docs \\ specific methods. 
//I kept trying to search for the sum but didn't know it was called sum. This is why I made an addAll function. 

const getItems = R.pluck("price");
//const addAll = (list) => R.sum(list); Didn't know R.sum existed. 
const toUSD = R.curry(function(number){
  let rounded = number.toFixed(2)
  let stringUSD = `$${rounded}`;
  return stringUSD;
});

const getTotalPrice = R.curry(
    R.pipe(
        getItems,
        R.sum,
        toUSD
    )
);
const price = getTotalPrice(cartItems);
console.log(price);

/*Educative's Solution 1
const toUSD = (amount) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getTotalPrice = pipe(
  map(prop('price')),
  reduce(add, 0),
  toUSD
);

Educative's Solution 2
const getTotalPrice = pipe(
  pluck('price'),
  sum,
  toUSD
);*/







//Exercise 2 - My Solution
const byPrice = R.ascend(R.prop('price'));

const getCheapestItem = R.curry(
    R.pipe(
      R.sort(byPrice),
      R.take(1),
      R.pluck("name"),
      R.last
  
    )
);

const cheapestItem = getCheapestItem(cartTotal);
console.log(cheapestItem);

/*Educative's Solution 1
const getCheapestItem = pipe(
  sort((a, b) => a.price - b.price),
  (list) => list[0],
  prop('name')
);


/*Educative's Solution 2 
'(list) => list[0]' gets replaced by 'head'


/*Educative's Solution 3 
const getCheapestItem = pipe(
  sortBy(prop('price')),
  head,
  prop('name')
);

*/








//Exercise 3 - My Attempt: I had trouble including parameters and still keeping it point-free. It seems counterintuitive 

//const bugetFilt = R.propEq("price", R.lte(11.30));   This caused a lot of headaches. For some reason, I had to use GTE to make it work
const byRating = R.ascend(R.prop('rating'));

const getTop3MealsFor = R.curry(
  R.pipe(
    R.sortWith([byPrice, byRating]),
    R.filter(R.propSatisfies(R.gte(11.30), 'price')),   //I tried propSatisfies but put it backwards and kept getting it wrong
    R.take(3)
  )
);

const menuBudget = getTop3MealsFor(menuItems);
console.log(menuBudget);

/*Educative's Solution 

const byPrice = descend(prop('rating'));
const getTop3MealsFor = pipe(
  (maxPrice, menu) => menu.filter(propSatisfies(gte(maxPrice), 'price')),
  sort(byPrice),
  slice(0, 3)
);

const result = getTop3MealsFor(12, menu);*/







//Exercise 4 - My improved solution from 2.1 HOF Exc using ramda
const calculateMonthlyPaycheck = R.curry(function(number){
  const months = 12;
  let monthly = number;
    return (monthly/months)
});

/*const getMedianPaycheck = function(employeeList){
  return R.pipe(
    getSalaries,
    reject(isBelowSixFigures),
    median,
    calculateMonthlyPaycheck,
    toUSD
  )(employeeList);
}*/


const getMedianPaycheck2 = function(employeeList){
  return R.pipe(
    R.pluck("salary"),
    R.filter(R.lte(100000)),
    R.median,
    calculateMonthlyPaycheck,   //Couldn't get R.divide to work. Edu uses flip to make divide work
    toUSD

  )(employeeList);
}

//const medianPaycheck = getMedianPaycheck(employeesList);
const medianPaycheck2 = getMedianPaycheck2(employeesList);
//console.log(medianPaycheck);
console.log(medianPaycheck2);

/*Educative's Solution
const toUSD = (amount) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const flippedDivide = flip(divide);

const getMedianPaycheck = pipe(
  pluck('salary'),
  filter(lte(100000)),
  median,
  flippedDivide(12),
  toUSD
);






//Exercise 5 - My Attempt - Biggest problem when starting was being able to add each value into an R.cond statement

const creditValues = function(creditScore){ /*for some reason, I kept getting undefined returned. 
      R.cond([
        console.log(R.gte(800, creditScore))
        [R.gte(800, creditScore), R.always(`${creditScore} is excellent!`)],
        [R.gte(700, creditScore), R.always(`${creditScore} is good`)],
        [R.gte(650, creditScore), R.always(`${creditScore} is fair`)],
        [R.lte(649, creditScore), R.always(`${creditScore} is poor`)]
      ])
  }

const reviewCreditScores = (creditList) =>{
 // creditList.map(f => console.log(f));
  return creditList.map(creditValues);
}

const ratingData = reviewCreditScores(ratings);
console.log(ratingData);



/*Educative's Solution 1 - No GTE/LTE


const reviewCreditScore = cond([
  [(score) => score >= 800, (score) => `${score} is excellent!`],
  [(score) => score >= 700, (score) => `${score} is good`],
  [(score) => score >= 650, (score) => `${score} is fair`],
  [(score) => score <= 649, (score) => `${score} is poor`]
]);

console.log(reviewCreditScore(800));


Educative's Solution 2

const reviewCreditScore = cond([
  [lte(800), (score) => `${score} is excellent!`],
  [lte(700), (score) => `${score} is good`],
  [lte(650), (score) => `${score} is fair`],
  [gte(649), (score) => `${score} is poor`]
]);

const reviewCreditScores = map(reviewCreditScore);*/





