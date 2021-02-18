const Node = require('./Node')
class LinkedList {
    constructor() {
        this.head = null;
    }    

    // addHead
    // addTail
    // removeHead

    addHead(data) {
        let currentHead = this.head;
        let newHead = new Node(data);
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead)
        }
    }
}