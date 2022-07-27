/*                                    C-printf Parser
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00147-hard-c-printf-parser/README.md
There is a function in C language: printf. This function allows us to print something with formatting. Like this
          printf("The result is %d.", 42);
This challenge requires you to parse the input string and extract the format placeholders like %d and %f. 
For example, if the input string is "The result is %d.", the parsed result is a tuple ['dec'].*/

/*Mapping Key:
type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}*/