/*                                    Vue Basic Props
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00213-hard-vue-basic-props/README.md
(6 - Simple Vue Link): https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md

Finish (6 - Simple Vue) first, and modify your code based on it to start this challenge. 
In addition to the Simple Vue, we are now having a new props field in the options. 
This is a simplif version of Vue's props option. 
1. props is an object containing each field as the key of the real props injected into this. 
2. The injected props will be accessible in all the context including data, computed, and methods.
3. A prop will be defined either by a constructor or an object with a type field containing constructor(s).

4. Should be inferred to type Props = { foo: boolean }.
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}


5. When passing multiple constructors, the type should be inferred to a union.
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }


6. When an empty object is passed, the key should be inferred to any.*/