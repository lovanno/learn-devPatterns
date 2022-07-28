/*                                    Omit
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
Implement the built-in Omit<T, K> generic without using it.
Constructs a type by picking all properties from T and then removing K*/

//Example:
interface mTodo {
  title: string
  description: string
  completed: boolean
}

type mTodoPreview = MyOmit<Todo, 'description' | 'title'>

const mtodo: mTodoPreview = {
  completed: false,
}

//My Attempt(Pass)
type MyOmit<T, K> = { [P in keyof T as Exclude<P, K>]: T[P] }


/*Solution 1: 
type MyOmit<T, K> = { [P in keyof T as P extends K ? never : P]: T[P] };

Solution 2:
type MyOmit<T, K extends keyof T> = { [Key in Exclude<keyof T, K>]: T[Key] }*/


/*Review: 
I tried multiple solutions without using Exclude but didn't know how to disqualify keys or how to create a 
conditional tenary inside an array. However, I knew using never to exclude keys would be the native solution*/