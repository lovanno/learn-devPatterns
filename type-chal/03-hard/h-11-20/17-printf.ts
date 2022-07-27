/*                                    printf
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00545-hard-printf/README.md
Implement Format<T extends string> generic.*/

/*Example:
type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string*/