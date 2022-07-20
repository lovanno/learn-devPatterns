/*                                    If
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. 
C is expected to be either true or false while T and F can be any type.*/

//Example: 
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'*/

type If<C extends boolean, T, U> = C extends true ? T : U;