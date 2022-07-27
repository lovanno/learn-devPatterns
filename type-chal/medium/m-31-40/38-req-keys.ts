/*                                    RequiredByKeys
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md
Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.
K specify the set of properties of T that should set to be required. 
When K is not provided, it should make all properties required just like the normal Required<T>.*/


/*Example:
interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }*/