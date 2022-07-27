/*                                    PartialByKeys
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md
Implement a generic PartialByKeys<T, K> which takes two type argument T and K.
K specify the set of properties of T that should set to be optional. 
When K is not provided, it should make all properties optional just like the normal Partial<T>.*/


/*Example:
interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }*/