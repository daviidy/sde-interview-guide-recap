Queues work in the same way as the line at the checkout counter at a retail store. People enter the queue from the back and exit the queue from the front. The purpose of a queue is much the same as it is in the retail store example - provide linear, ordered access to some resource.

A queue’s main operations are enqueue, dequeue, and peek. All of these should be doable without iterating through all the elements of the queue. To this end, a queue should have a head pointer and a tail pointer.

```python
class ListNode:
def __init__(self, val): 
    self.val = val
    self.next = None class Queue:

def __init__(self): 
    self.head = None 
    self.tail = None 

def enqueue(self, val):
    new_node = ListNode(val) 
    if self.head is None: 
        self.head = new_node 
        self.tail = new_node 
        return 
    self.tail.next = new_node 
    self.tail = new_node

def dequeue(self):
    if self.head is None: return None
    return_val = self.head.val
```