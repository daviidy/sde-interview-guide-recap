class Node {
    constructor(val) {
        this.val = val
        this.next = val
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val)
    }

    append(node) {
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = node
        return node
    }

    insertBefore(index, node) {
        let i = 0
        let current = this.head
        while(i + 1 < index) {
            current = current.next
            i++
        }
        const temp = current.next 
        current.next = node 
        node.next = temp
        return node
    }

    insertAfter(index, node) {
        let i = 0
        let current = this.head
        while(i < index) {
            current = current.next
            i++
        }
        const temp = current.next 
        current.next = node 
        node.next = temp
        return node
    }

    delete(index) {
        let i = 0
        let current = this.head
        while(i + 1 < index) {
            current = current.next
            i++
        }
        const nodeToDelete = current.next
        const temp = nodeToDelete.next
        current.next = temp 
        nodeToDelete.next = null
        return true
    }
}