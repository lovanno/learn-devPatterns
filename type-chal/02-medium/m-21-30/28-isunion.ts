/*                                    IsUnion
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.*/


/*Example:
type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false*/