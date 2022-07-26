/*                                    Unshift
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
Implement the type version of Array.unshift*/

//Example:
type Result6 = Unshift<[1, 2], 0> // [0, 1, 2,]*/


//My Attempt (Pass)
type Unshift<T extends unknown[], U> = [U, ...T];


/*Solution
type Unshift<T extends unknown[], U> = [U, ...T];*/