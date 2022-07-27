/*                                    Merge
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md
Merge two types into a new type. Keys of the second type overrides keys of the first type.*/


/*Example:
type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}*/