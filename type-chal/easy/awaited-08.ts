/*                                    Awaited
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?*/

/*Example: if we have Promise<ExampleType> how to get ExampleType?
type ExampleType = Promise<string>
type Result2 = MyAwaited<ExampleType> // string */