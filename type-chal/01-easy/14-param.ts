/*                                    Parameters
Implement the built-in Parameters generic without using it.*/

//Example:
const foo = (arg1: string, arg2: number): void => { }
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]*/


/*My Attempt (X)
type MyParameters<T> = T extends Function(...args: any[]) => any ? never : never;

Review:
I was stuck on how to check the type without knowing it ahead of time. Using Infer was the solution*/



//Solution 1
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

/*Solution 2
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args) => unknown ? Args : never*/