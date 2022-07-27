/*                                    Typed Get
Exc Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00270-hard-typed-get/README.md
(lodash link): https://lodash.com/docs/4.17.15#get
(Template Literal Types link ): https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types

The get function in (lodash) is a quite convenient helper for accessing nested values in JavaScript. However, when we come 
to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming 
(Template Literal Types) feature, properly typing get becomes possible. Can you implement it?

Accessing arrays is not required in this challenge.*/


/*Example:
type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}
  
type A = Get<Data, 'hello'> // 'world'
type B = Get<Data, 'foo.bar.count'> // 6
type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }*/