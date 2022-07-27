/*                                    Flip Arguments
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md
Implement the type version of lodash's _.flip.
Type FlipArguments<T> requires function type T and returns a new function type which has 
the same return type of T but reversed parameters*/


/*Example:
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void*/