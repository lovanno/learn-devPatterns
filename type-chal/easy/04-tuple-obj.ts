/*                                     Tuple to Object
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
Give an array, transform into an object type and the key/value must in the given array.*/

//Example
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

/*My Attempt (X)
type TupleToObject<T> = {
    [P in keyof T]: P;
}

Review: My attempt failed because it didn't create a new array. 
I couldn't wrap my head around only having 1 generic argument. I also didn't know how to implement the solution as type and not a function
I'm also surprised to see type any[]. I'm glad I learned that we can get values from an array by using T[number] construct.
*/


//Solution
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
};

//Solution 2
//type TupleToObject<T extends readonly (string | number)[]> = { [K in T[number]]: K }
