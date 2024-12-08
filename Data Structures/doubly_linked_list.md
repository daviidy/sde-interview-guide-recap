Doubly linked lists are a variation of linked lists. In a regular linked list, each node points to the next node and that’s it. In a double linked list, where each node has a pointer to the previous node too. Doubly linked lists make much more sense and are easier to use, so they are more common in practice than singly linked lists.

The interface of Doubly Linked Lists is similar to their singly linked counterparts. The key elements are:
1. A pointer to the head of the list
2. (Optional but very common) A pointer to the tail of the list
3. One or more Add methods. They might provide up to three: prepend, append, and insert_after_index.
4. One or more delete methods. You might delete by value or delete a node by reference.

```python
class ListNode:
def __init__(self, val):
self.val = val
self.next = None
self.prev = None
class DoublyLinkedList:
def __init__(self):
self.head = None
self.tail = None

def prepend(self, data):
was_empty = self.head is None and self.tail is None
new_node = ListNode(data)
new_node.next = self.head
if self.head is not None:
self.head.prev = new_node
self.head = new_node
if was_empty:
self.tail = self.head
def append(self, data):
was_empty = self.head is None and self.tail is None
new_node = ListNode(data)
if self.tail is not None:
self.tail.next = new_node
new_node.prev = self.tail
self.tail = new_node
if was_empty:
self.head = self.tail
def insert_after(self, prev_node, new_data):
if prev_node is None:
return
if prev_node.next == self.tail: # we are at the end
self.append(new_data)
return
new_node = ListNode(new_data)
new_node.next = prev_node.next
new_node.prev = prev_node
prev_node.next = new_node
if new_node.next is not None:
new_node.next.prev = new_node
def delete(self, node_to_delete):
if node_to_delete is None:
return
if node_to_delete == self.head and node_to_delete == self.tail:
self.head = None
self.tail = None
return
if node_to_delete == self.head:
self.head = node_to_delete.next
if node_to_delete == self.tail:
self.tail = node_to_delete.prev
if node_to_delete.prev is not None:
node_to_delete.prev.next = node_to_delete.next
if node_to_delete.next is not None:
node_to_delete.next.prev = node_to_delete.prev
node_to_delete.next = None
node_to_delete.prev = None
def __str__(self):
cur = self.head
result = ""
while cur:
result = result + str(cur.val) + " "
cur = cur.next
return result
```