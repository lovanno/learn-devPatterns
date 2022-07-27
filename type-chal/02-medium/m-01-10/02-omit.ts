/*                                    Omit
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
Implement the built-in Omit<T, K> generic without using it.
Constructs a type by picking all properties from T and then removing K*/

/*Example:
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}*/