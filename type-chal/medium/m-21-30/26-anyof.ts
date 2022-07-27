/*                                    AnyOf
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
Implement Python liked any function in the type system. A type takes the Array and returns true if 
any element of the Array is true. If the Array is empty, return false.*/

/*Example:
type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.*/