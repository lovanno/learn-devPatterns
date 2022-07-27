/*                                    Includes
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.*/

//Example:
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`*/


//My Attempt (Pass)
type Includes<T extends any[], U> = U extends T[number] ? true : false

/*Review:
Infer is always used within the extends clause of a conditional type to explicitly compare a different existing type.
Whenever infer is omitted, the compiler checks if T is assignable to the conditional type.
Also, TypeScript will return a union of all elements from T (if you have a T = [1, 2, 3], accessing it via T[number] will return 1 | 2 | 3)



/*Solution 1
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;


Solution 2
type Includes<T extends readonly any[], U> = {} extends {
    [K in keyof T as Equal<T[K], U> extends true ? K : never] 
    : T[K]; 
} ? false : true

Solution 3
type Includes<T extends readonly any[], U> =
    T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true
        ? true
        : Includes<Rest, U>
    : false;*/