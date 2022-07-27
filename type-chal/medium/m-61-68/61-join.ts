/*                                    Join
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md
Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns 
the Array T with U stitching up.*/

/*Example:
type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'*/