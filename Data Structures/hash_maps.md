Hash Maps, Hash Tables, Python dicts, C# Dictionaries, JavaScript object
literals, Ruby hashes... They all work more or less the same way. The
differences between them are small and few people can list the differences
off the top of their head. Mainly, the differences between all of these are
whether they are thread safe or not, and what kinds of entities can be used
as Keys. A Java HashMap can use any hashable entity (almost anything,
really) as a key, whereas a JavaScript object literal can only use a string or
symbol as a key.

A hash map is a data structure designed for fast lookups of key value pairs.
You use the key to look up a specific value.

for a
given key, a hash map can know where in the array it will be stored by
following these steps:
1. Hash the key12
2. Mod the result by the length of the backing array
3. The resulting index will be used in order to quickly locate the right
place for this key

One key point to reiterate is that Hash Maps don’t accept duplicate keys, so
that’s why you always need to iterate the target linked list, even when
inserting. You need to make sure the key isn’t already there because if it is,
you need to overwrite its value. If the key is not present, you append your
key-value pair to the end of the list.

deletion should be easy to imagine. In
the case of deleting an entry, you still start by finding the right array index:
hash the key you want to delete and mod the result by the array size.Then
iterate through the list at that index to see if you can find the key you’re
trying to delete. Once you’ve found it, delete the node from the linkedlist.

Open addressing hash maps are not that common. Their advantages lie in
cache locality but they come with tradeoffs. Basically, if your entries
(key-value pairs) are of a knowable max size, then you can embed the
entries inside the array cells. This is in contrast to the array cells just being
pointers to the entry objects, which reside somewhere else in memory. If
your entries are small and embedded inside the array cell, then when you
fetch one entry you might also fetch neighboring entries into cache. This, in
turn, results in faster runtime performance due to cache being so much
faster than RAM access.

When inserting, you first find the correct index to insert (again, by hashing
and modding). Then, if your target cell is empty, you just insert the
key-value pair there. If your target cell is not empty, you move on to the
next cell until you find an empty one .

When retrieving, as you might imagine, you also start with the cell
determined by hashing and modding the key. But if the entry at that location
has a different key than the one you’re looking for, then you have to check
each successive cell until you find an empty one

you have to find the target cell first as always. Then you
iterate until you find the element with the target key. Then you delete it, and
then you must continue iterating and shift back any elements that also
had a collision with the deleted key.

Thus, in order to finish deleting “Bye”
, we have to continue iterating through
until we find an empty index. Along the way, we take any elements whose
hash was equal to the hash of “Bye” and shift them back to an empty
space. 

The hashmap load factor upper limit represents a percentage up until which
the hashmap will accept elements before resizing.

the hashmap load factor lower limit is a number representing a
percentage of capacity the hash map will go to before shrinking its
underlying storage.

The key things to remember with regard to resizing are:
1. The underlying array of a hash map is dynamic in size. It grows and
shrinks so that the lists in each array cell stay very short (0-2
elements usually).
2. Because the load factor is usually rather low, most Hash Map
implementations are sparsely filled. At any given point in time a Hash
Map is expected to contain a number of elements that is less than
half the size of the underlying array.

```python
class HashMapNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value

class HashMap:
    def __init__(self):
        self.store = [[] for self.size = 0 in range(16)]
    
    def get(self, key):
        # Python has a 'hash' function built-in
        index = hash(key) % len(self.store)
        chain = self.store[index]
        for kv in chain:
            if kv.key == key:
                return kv.value
        return None

    def put(self, key, value):
        new_node = HashMapNode(key, value)
        index = hash(key) % len(self.store)
        list_at_index = self.store[index]
        key_already_existed = False
        for kv in list_at_index:
            if kv.key == key:
                kv.value = value
                key_already_existed = True
                break

        if not key_already_existed:
            list_at_index.append(new_node)

    def delete(self, key):
        index = hash(key) % len(self.store)
        list_at_index = self.store[index]
        for kv in list_at_index:
            if kv.key == key:
                list_at_index.remove(kv)
                break

    def __len__(self):
        return self.size
```