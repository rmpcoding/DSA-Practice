const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addHead(data) {
        let currentHead = this.head;
        let newHead = new Node(data);
        this.head = newHead;

        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    removeHead() {
        let removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    addTail(data) {
        let tail = this.head;
        let newTail = new Node(data);

        if (!tail) {
            this.addHead(newTail);
        } else {
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail = tail.setNextNode(newTail);
        }
    }
}

module.exports = LinkedList;
