/* Definitions:
forEach - The forEach() method executes a provided function once for each array element.
map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
filter - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the
given array that pass the test implemented by the provided function

Exercise: Re-implement forEach, map and filter using reduce, and to do it in a type safe manner using Typescript.
Link: https://youtu.be/DxG17pbgsZg */

//My Tester Function: Total Sum of all Nums //
const allSumTest = (arra: number[]) => {
    return arra.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
}
const totNumerics = [0, 1, 2, 3]





//(1) forEach: Exercise Attempt (X)
const reForEach = (arra: any[], func: Function) => {
    return arra.reduce((previousValue, currentValue) => currentValue = func(previousValue), 0)
}
//console.log(reForEach(totNumerics, allSumTest))

/*   Review: 
This solution didn't pass. I kept getting "TypeError: newArr.reduce is not a function"
The hardest part was being able to make the array generic. I didn't know how to implement a generic inside an arrow function.
The solution placed the function param as if it were executing it. This is more explicit and makes more sense*/


//Solution 1: 
function myForEach<T>(values: T[], forEachFunc: (val: T) => void): void {
    values.reduce((_, v) => {
        forEachFunc(v);
        return undefined;
    }, undefined);
}
myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));
myForEach([5, 8, 9], (v) => console.log((v * 2)));



/*      During Exc 2, I realized I didn't understand generics. 
Instead of forcing myself to figure it out like I usually do,
I watched the lessons and rewrote the solution to each Exc multiple times.
By doing this, I understood how each function truly worked AND
learned how generics are used, as well as functions parameters */


//Solution 2:
function myMap<T, U>(items: T[], mapFunc: (val: T) => U): U[] {
    return items.reduce((a, v) => [...a, mapFunc(v)], [] as U[])
}
const nums = [5, 8, 9] as const
console.log(myMap([5, 8, 9], (v) => (v * 2)));


//Solution 3: 
function myFilter<T>(items: T[], filterFunc: (val: T) => boolean): T[] {
    return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[])
}