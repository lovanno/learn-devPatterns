/*                                     Readonly
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
Implement the built-in Readonly<T> generic without using it.
Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.*/

/*Example
interface Todo2 {
  title: string
  description: string
}
const todo2: MyReadonly<Todo2> = {
  title: "Hey",
  description: "foobar"
}

/*todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property*/