const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addHead(data) {
        let newHead = new Node(data);
        let previousHead = this.head;
        this.head = newHead;

        if (previousHead) {
            this.head.setNextNode(previousHead);
        } 
    }

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

    removeHead() {
        let removedHead = this.head;

        if (!removedHead) {
            return console.log("No head exists for this LinkedList!")
        }

        this.head = this.head.getNextNode()
        console.log(`${this.head} is now the new head!`)
    }

}

module.exports = LinkedList;