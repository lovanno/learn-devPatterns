/*                                     Readonly
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
Implement the built-in Readonly<T> generic without using it.
Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.*/

/*Example
interface Todo {
  title: string
  description: string
}
const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property*/

