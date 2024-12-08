The LinkedList class itself should have the following components:  
1. A property which points to the head of the list, which is either null or a node
2. An insert method
3. A delete method.
4. There should be some kind of simple auxiliary class to represent a node Thus, the interface would be like so:  class ListNode:
```python
class ListNode:
    def __init__(self, val): 
        self.val = val
        self.next = None 

class LinkedList:
    def __init__(self): 
        self.head = None  
    
    def insert(self, data):
        new_node = ListNode(data) 
        if not self.head: 
            self.head = new_node 
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node 
    
    def delete(self, val_to_delete): 
        ctr = 0
        cur = self.head 
        if cur is not None and cur.val == val_to_delete: 
            self.head = cur.next
            cur.next = None
            return 
        while cur is not None:
            if cur.val == val_to_delete: 
                break
        prev = cur
        cur = cur.next
        prev.next = cur.next 
        cur.next = None 
        if cur == None:
            return # not found  
    
    def __str__(self):
        cur = self.head
        result = ""
        while cur: 
            result = result + str(cur.val) + " " 
            cur = cur.next
        return result

```