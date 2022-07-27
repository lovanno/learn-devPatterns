/*                                    ClassPublicKeys
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/02828-hard-classpublickeys/README.md
Implement the generic ClassPublicKeys<T> which returns all public keys of a class.*/

/*Example:
class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}

type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'*/