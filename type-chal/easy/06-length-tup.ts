/*                                    Length of Tuple
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md
For given a tuple, you need create a generic Length, pick the length of the tuple*/

//Example:
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5


//My Attempt (Pass)
type Length<T extends any[]> = T['length']

/*Review:
Before reviewing the solution, I was wondering if should more specific with the array but empty arrays return length 0 so we wouldn't get an error
After reviewing, I made the solution only consider length but length can be applied to strings*/

/*Solution 1 
type Length<T extends { length: number }> = T["length"];

Solution 2
type Length<T extends readonly any[]> = T['length']


Solution 3
type Length<T extends readonly unknown[]> = T['length'];*/
