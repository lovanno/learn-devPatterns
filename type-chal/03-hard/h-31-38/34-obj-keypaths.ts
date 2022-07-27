/*                                    ObjectEntries
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.md
(_.get (a lodash function link)): https://lodash.com/docs/4.17.15#get
Get all possible paths that could be called by (_.get (a lodash function)) to get the value of an object*/

/*Example:
type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'

type T2 = ObjectKeyPaths<{
  refCount: number;
  person: { name: string; age: number };
}>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'

type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 
'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'*/