/*                                    Get Readonly Keys
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00005-extreme-readonly-keys/README.md
Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.*/

/*Example:
interface Todo {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"*/