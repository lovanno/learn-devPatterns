/*                                    Remove Index Signature
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md
Implement RemoveIndexSignature<T> , exclude the index signature from object types.*/


/*Example:
type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }*/