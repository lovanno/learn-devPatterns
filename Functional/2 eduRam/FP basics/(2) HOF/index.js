/*import { median, pluck, pipe, reject } from 'ramda';*/
import employees from './employees.json';

const getMedianSixFigurePaycheck = pipe(
  getSalaries,
  reject(isBelowSixFigures),
  median,
  calculateMonthlyPaycheck,
  toUSD
);

const result = getMedianSixFigurePaycheck(employees);

console.log({ result });
