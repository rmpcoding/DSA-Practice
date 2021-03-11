const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // addHead
    // addTail
    // removeHead

    addHead(data) {
        let newHead = new Node(data);
        let currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead)
        }
    }
}

let first = new LinkedList();
first.addHead('This is first data passed in');
console.log(first);
