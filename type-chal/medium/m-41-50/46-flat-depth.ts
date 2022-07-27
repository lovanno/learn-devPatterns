/*                                    FlattenDepth
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md
Recursively flatten array up to depth times
If the depth is provided, it's guaranteed to be positive integer.*/


/*Example:
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1*/