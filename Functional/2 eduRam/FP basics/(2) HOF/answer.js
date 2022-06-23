const getSalaries = R.curry(function(employeeList){
  return employeeList.map(obj => obj.salary);
});

const isBelowSixFigures = number => number < 100000;

const reject = R.curry(function(condition, elm){
  return elm.filter(condition);
});


const even = number => number % 2 == 0;

const median = R.curry(function(numbers){
  const sorted = Array.from(numbers).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

    if (even(sorted.length)) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
});

const calculateMonthlyPaycheck = R.curry(function(number){
  const months = 12;
  let monthly = number;
    return (monthly/months)
});

const toUSD = R.curry(function(number){
  let rounded = number.toFixed(2)
  let stringUSD = `$${rounded}`;
  return stringUSD;
});


const getMedianSixFigurePaycheck = function(employeeList){
  return R.pipe(
    getSalaries,
    reject(isBelowSixFigures),
    median,
    calculateMonthlyPaycheck,
    toUSD
  )(employeeList);
}

const result = getMedianSixFigurePaycheck(employees);
console.log({ result });