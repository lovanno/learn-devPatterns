/*                                    Currying 1
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.md
Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that 
each take a single argument.
The function passed to Currying may have multiple arguments, you need to correctly type it.

In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, 
it should return its result.*/


/*Example:
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)*/