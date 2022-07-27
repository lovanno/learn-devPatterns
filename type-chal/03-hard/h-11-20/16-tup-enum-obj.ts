/*                                    Tuple to Enum Object
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.md
The enum is an original syntax of TypeScript (it does not exist in JavaScript). 
So it is converted to like the following form as a result of transpilation:
      let OperatingSystem;
      (function (OperatingSystem) {
          OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
          OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
          OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
      })(OperatingSystem || (OperatingSystem = {}));
   
      
      
1. In this question, the type should convert a given string tuple to an object that behaves like an enum. 
Moreover, the property of an enum is preferably a pascal case.

Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }


2. If true is given in the second argument, the value should be a number literal.

Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }*/