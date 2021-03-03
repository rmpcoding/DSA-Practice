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
        let newHead = removedHead.getNextNode()
        if (removedHead) {
            this.head.setNextNode(newHead);
            console.log(`${removedHead} was removed as the head, and ${newHead} is now the new head!`)
        } else {
            console.log('There is no head to remove!')
        }
    }

    addTail(data) {
        let tail = this.head;
        let newTail = new Node(data);

        if (!tail) {
            this.addHead(newTail)
        } else {
            while(tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail = tail.setNextNode(newTail)
        }
    }
}