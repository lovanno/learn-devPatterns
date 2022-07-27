/*                                    Union to Tuple
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.md
Implement a type, UnionToTuple, that converts a union to a tuple.

As we know, union is an unordered structure, but tuple is an ordered, which implies that 
we are not supposed to preassume any order will be preserved between terms of one union, 
when unions are created or transformed.

Hence in this challenge, any permutation of the elements in the output tuple is acceptable.
Your type should resolve to one of the following two types, but NOT a union of them!*/

/*Example 1:
UnionToTuple<1>           // [1], and correct
UnionToTuple<'any' | 'a'> // ['any','a'], and correct*/

/*Example 2:
UnionToTuple<'any' | 'a'> // ['a','any'], and correct*/

/*Incorrect Example: 
UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect*/

/*Note: Aunion could collapes, which means some types could absorb (or be absorbed by) others and there is 
no way to prevent this absorption. See the following examples:
Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true*/


