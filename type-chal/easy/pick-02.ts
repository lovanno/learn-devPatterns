/*                                      Pick
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
Implement the built -in Pick < T, K > generic without using it.
Constructs a type by picking the set of properties K from T*/

//Example
interface Todo {
    title: string
    description: string
    completed: boolean
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}


/*Thought Process: Before I can solve this problem, I have to understand what a utility type is. Looking at the docs, we aren't given an exact definition. 
So I peeked at Required's type definition. Now I understand. A utility type is just a type that implements a generic.
The next question I had was, what is '-?' doing in Required. The '-?' just removes optionality. (Link: https://stackoverflow.com/questions/52417131/what-does-mean-in-typescript)
 
Make all properties in T required

type Required<T> = {
    [P in keyof T]-?: T[P];
};*/




// My Attempts
/*The reason I struggled is because I didn't have mapped type fundamentals down. Everytime I had an error, 
I searched up the reason to fix it. Eventually I found out I needed to use Key in and also use extend keyof for Key in to work

(1)
type MyPick<T, K> = {
    [K in keyof T]{ }: T[K]
}

(2)
type MyPick<T, K> = {
    [T in keyof K]: T;
}

(3) Correct */
type MyPick<T, K extends keyof T> = {
    [Key in K]: T[K]
}


/*Solutions
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
*/