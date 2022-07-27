/*                                    IsRequiredKey
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/02857-hard-isrequiredkey/README.md
Implement a generic IsRequiredKey<T, K> that return whether K are required keys of T*/


/*Example:
type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false*/