/*                                    OmitByType
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
From T, pick a set of properties whose type are not assignable to U.*/


/*Example:
type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }*/