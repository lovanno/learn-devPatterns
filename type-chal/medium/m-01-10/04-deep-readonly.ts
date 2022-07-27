/*                                    Deep Readonly
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md
Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes 
and so on are no need to take into consideration. However, you can still challenge your self by covering different cases*/

/*Example:
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK*/