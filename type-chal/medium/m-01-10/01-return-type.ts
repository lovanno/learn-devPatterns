/*                                    Get Return Type
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
Implement the built-in ReturnType<T> generic without using it
A type takes the two arguments. The output should be a new array that includes inputs in ltr order*/

/*Example:
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"*/