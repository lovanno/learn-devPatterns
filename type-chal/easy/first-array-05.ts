/*                                    First of Array
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
Implement a generic First<T> that takes an Array T and returns it's first element's type.*/

//Example:
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3*/

//My Attempt (Pass)
type First<T extends any[]> = T[0];

/*Review:
I didn't know how to make the array without any but the 2nd solution, shows 
you can use unknown if you provide a tenary/conditional operation checking if the array is empty.
I also learned that type doesn't have to have brackets. Brackets just returns an object




/*Solution
type First<T extends any[]> = T extends [] ? never : T[0];


Another Solution
type First<T extends Array<unknown>> = T extends Array<never> ? never : T[0];*/
