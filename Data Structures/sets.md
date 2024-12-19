Typically, when people talk about sets, they are talking about Hash Sets.
There are other implementations of sets, but HashSets are the most common.

The only thing that really changes is that in a Hash Set you
are hashing the entire object in order to find the index in which it should be
inserted in the underlying array. In a Hash Map, you only hashed the key. In
a Hash Set, since it doesn’t take key value pairs but just objects, you hash
the whole object.