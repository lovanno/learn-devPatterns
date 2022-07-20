/*                                    Exclude
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
Implement the built-in Exclude<T, U>
Exclude from T those types that are assignable to U*/

//Example:
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'*/

//Attempt 1 - Didn't know how to make tenary operator work
//type MyExclude<T, U extends keyof T> = T[U] never : T

//Attempt 2 (Correct)
type MyExclude<T, U> = T extends U ? never : T;

/*Review:
I'm glad I continued with my errors. It lead me to extending on the right side and knowing I can use never to discard values*/


//Solution
//type MyExclude<T, U> = T extends U ? never : T;
