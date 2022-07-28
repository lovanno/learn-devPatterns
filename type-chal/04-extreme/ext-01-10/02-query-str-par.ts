/*                                    Query String Parser
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00151-extreme-query-string-parser/README.md
You're required to implement a type-level parser to parse URL query string into a object literal type.

Some detailed requirements:
1. Value of a key in query string can be ignored but still be parsed to true. 
        For example, 'key' is without value, so the parser result is { key: true }.

2. Duplicated keys must be merged into one. If there are different values with the same key, 
values must be merged into a tuple type.

3. When a key has only one value, that value can't be wrapped into a tuple type.

4. If values with the same key appear more than once, it must be treated as once. 
        For example, key=value&key=value must be treated as key=value only.*/