/*                                    Currying 2
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00462-extreme-currying-2/README.md
Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that 
each take a single argument.
But in our daily life, currying dynamic arguments is also commonly used, for example, 
the Function.bind(this, [...params]) API.

In this challenge, DynamicParamsCurrying may take a function with zero to multiple arguments, 
you need to correctly type it. The returned function may accept at least one argument. 
When all the arguments as satisfied, it should yield the return type of the original function correctly.


const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)
const result = bindFunc(3) // result: 6

Thus, based on Currying 1, we would need to have the dynamic argument version:

        const add = (a: number, b: number, c: number) => a + b + c
        const three = add(1, 1, 1) 

        const curriedAdd = DynamicParamsCurrying(add)
        const six = curriedAdd(1, 2, 3)
        const seven = curriedAdd(1, 2)(4)
        const eight = curriedAdd(2)(3)(4)*/