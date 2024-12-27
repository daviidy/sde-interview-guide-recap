A Binary Search Tree is a Binary Tree with the additional characteristic that
for a given node n, every node in its left subtree is smaller than the value of
n, and every node in the right subtree is greater than the value of n.

If implemented with an auxiliary node class, the BST class will have only
one property: a “root” pointer. This pointer starts out as null. The first value
you add to the tree then becomes the root node. Thereafter, in order to
insert a new value into the tree, you need to traverse some of the branches
of the existing tree

If implemented without an auxiliary node class, then the BST
implementation is sort of recursive; each node is a BST.


The property that all elements in the left subtree are less than or equal to
the current node is very important. Because of this property, when you are
searching for an element and you compare it to the current node, you rule
out up to half of the tree. Whenever an algorithm can cut its input size in
half in each iteration, it will be logarithmic in runtime (O(log(n)).
The fast lookup speeds of binary search trees depends on them being
balanced

Under an AVL tree, the definition of balance is simple. In an AVL tree, each
node keeps track of the height of its left subtree and the height of its right
subtree. Let’s use the term “height differential” to refer to the difference in
magnitude between the height of the left subtree and the height of the right
subtree. If at any point any node has a height differential greater than two,
then the tree is considered imbalanced and rotations must be applied in
order to bring it back to balance.
Under a red black tree, the definition of balance is rather complicated. Red
black trees have four rules that must be met by the tree as a whole in order
for it to be considered balanced. The following are the four rules:
1. Each node has a color: either red or black
2. A red node cannot be the immediate child of another red node
3. There must be an equal amount of black nodes in every path from a
leaf node to the root
4. The null pointers (left and right) at each leaf are considered to be
black nodes
When adding or deleting a node, the tree will attempt to recolor the nodes
in such a way that it maintains the above 4 rules. If the tree can’t do this,
then it will perform rotations in order to accomplish maintaining the
balanced state of the tree. Recall that the definition of balance in a red
black tree is that the four rules above be observed.

```python
class SimpleBinarySearchTree:
def __init__(self, val):
self.left = None
self.right = None
self.val = val
def insert(self, val):
if val <= self.val:
if self.left is None:
self.left = SimpleBinarySearchTree(val)
else:
self.left.insert(val)
else:
if self.right is None:
self.right = SimpleBinarySearchTree(val)
else:
self.right.insert(val)
def find(self, val):
if (self.val == val):
return self
if (val <= self.val):
if self.left is None:
return False
return self.left.find(val)
else:
if self.right is None:
return False
return self.right.find(val)
def delete(self, val):
prev, curr = None, self
# 1. find the node
while curr and curr.val != val:
prev = curr
curr = curr.left if val < curr.val else curr.right
# 2. check if node exists
if curr is None:
return None # You can also choose to throw an error here
if curr.left is None and curr.right is None:
if prev and prev.left and prev.left.val == curr:
prev.left = None
else:
prev.right = None
elif curr.left is None or curr.right is None:
self._delete_helper_for_node_with_one_child(prev, curr)
else:
temp = curr.right.minimum()
curr.delete(temp.val)
curr.val = temp.val
# This works for a node with one child or zero children
def _delete_helper_for_node_with_one_child(self, prev, curr):
# curr is left child of prev
if prev.left and prev.left.val == curr.val:
if curr.left is None:
temp = curr.right
prev.left = temp
curr.right = None
elif curr.right is None:
temp = curr.left
prev.left = temp
curr.left = None
else:
pass # could throw an exception here too
else:
if curr.left is None:
temp = cur.right
prev.right = temp
cur.right = None
elif cur.right is None:
temp = cur.left
prev.right = temp
cur.left = None
else:
pass # could throw an exception here too
def minimum(self):
node = self
while node.left != None:
node = node.left
return node
def __str__(self):
ret = ""
if self.left is not None:
    ret += " " + str(self.val)
if self.right is not None:
ret += str(self.right)
return ret
```