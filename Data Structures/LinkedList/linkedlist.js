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

    insert(node) {
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = node
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
    }

    delete(index) {
        let i = 0
        let current = this.head
        if(i === index) {
            this.head = current.next
            current.next = null
            return
        }
        while(i + 1 < index && current.next) {
            current = current.next
            i++
        }
        const nodeToDelete = current.next
        const temp = nodeToDelete.next
        current.next = temp 
        nodeToDelete.next = null
    }
}