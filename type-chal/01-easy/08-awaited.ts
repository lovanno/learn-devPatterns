/*                                    Awaited
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?*/

//Example: if we have Promise<ExampleType> how to get ExampleType?
type ExampleType = Promise<string>
type Result2 = MyAwaited<ExampleType> // string


/*My Attempt (X)
type MyAwaited<T> = [P extends T] ? never : T

Review: 
I failed to read the instructions and struggled because I haven't looked at test cases. If I did this in every exercise,
my solutions could be better and the tests can guide me on exactly what to do. 
I will look at test cases going forward. I also think reviewing the entire easy chapter would help drill generics. 
I have some understanding but not enough to be effective. */


//Solution 1
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;


/*Solution 2
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
    ? R extends Promise<any>
        ? MyAwaited<R>
        : R
    : never

Solution 3
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R extends Promise<unknown>
    ? MyAwaited<R>
    : R
  : T;
*/