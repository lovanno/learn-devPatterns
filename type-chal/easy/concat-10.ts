/*                                    Concat
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
Implement the JavaScript Array.concat function in the type system. 
A type takes the two arguments. The output should be a new array that includes inputs in ltr order*/

//Example:
type Result3 = Concat<[1], [2]> // expected to be [1, 2]

//My Attempt (Pass)
type Concat<T extends any[], U extends any[]> = [...T, ...U]

/*Review:
Extending T and U felt redundant but it makes it clear that each generic an array


/*Solution 
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];*/