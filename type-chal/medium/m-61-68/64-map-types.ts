/*                                    MapTypes
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md
Implement MapTypes<T, R> which will transform types in object T to different types defined by
type R which has the following structure*/

/*Example 1:
type StringToNumber = {
  mapFrom: string; // value of key which value is string
  mapTo: number; // will be transformed for number
}*/

/*Example 2:
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }*/

/*Example 3: Be aware that user can provide a union of types:
type StringToNumber = { mapFrom: string; mapTo: number;}
type StringToDate = { mapFrom: string; mapTo: Date;}
MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }*/

/*Example 4: If the type doesn't exist in our map, leave it as it was:
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }*/
