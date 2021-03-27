const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // addHead

    addHead(data) {
        let newHead = new Node(data);
        let previousHead = this.head;
        this.head = newHead;

        if (previousHead) {
            this.head.setNextNode(previousHead);
        } 
    }

    // addTail

    addTail(data) {
        let newTail = new Node(data);
        let currentNode = this.head;

        if (!currentNode) {
            this.addHead(newTail);
            return;
        } 

        while (currentNode.getNextNode()) {
            currentNode = currentNode.getNextNode();
        }

        currentNode.setNextNode(newTail);
    }
    // removeHead


}