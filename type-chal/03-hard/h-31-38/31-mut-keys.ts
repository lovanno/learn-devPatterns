/*                                    Mutable Keys
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/05181-hard-mutable-keys/README.md
Implement the advanced util type MutableKeys, which picks all the mutable (not readonly) keys into a union.*

/*Example:
type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// expected to be “bar”*/