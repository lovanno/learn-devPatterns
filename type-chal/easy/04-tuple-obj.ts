/*                                     Tuple to Object
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
Give an array, transform into an object type and the key/value must in the given array.*/

/*Example
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}*/