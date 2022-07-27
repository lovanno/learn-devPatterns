/*                                    InorderTraversal
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md
Implement the type version of binary tree inorder traversal.*/


/*Example:
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

type A = InorderTraversal<typeof tree1> // [1, 3, 2]*/