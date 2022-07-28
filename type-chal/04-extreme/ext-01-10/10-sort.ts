/*                                    Sort
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00741-extreme-sort/README.md
In this challenge, you are required to sort natural number arrays in either ascend order or descent order.
Ascend order examples:
        Sort<[]> // []
        Sort<[1]> // [1]
        Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]> //  [2, 4, 5, 6, 6, 6, 7, 8, 9]

The Sort type should also accept a boolean type. When it is true, the sorted result should be in descent order. Some examples:
        Sort<[3, 2, 1], true> // [3, 2, 1]
        Sort<[3, 2, 0, 1, 0, 0, 0], true> // [3, 2, 1, 0, 0, 0, 0]

        
Extra challenges:
    Support natural numbers with 15+ digits.
    Support float numbers.*/