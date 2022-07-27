/*                                    Chunk
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md
Do you know lodash? Chunk is a very useful function in it, now let's implement it. 
Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1*/

/*Example:
type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]*/