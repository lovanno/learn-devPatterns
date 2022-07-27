/*                                    ObjectFromEntries
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/02949-hard-objectfromentries/README.md
Implement the type version of Object.fromEntries*/

/*Example:
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
type result = ObjectFromEntries<ModelEntries> // expected to be Model*/