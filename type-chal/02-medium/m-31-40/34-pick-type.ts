/*                                    PickByType
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md
From T, pick a set of properties whose type are assignable to U.*/


/*Example:
type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }*/