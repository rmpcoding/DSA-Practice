const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addHead(data) {
        let newHead = new Node(data);
        let currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addTail(data) {
        const newTail = new Node(data);
        let currentNode = this.head;

        if (!currentNode) {
            return this.addHead(newTail);
        }

        while (currentNode.getNextNode()) {
            currentNode = currentNode.getNextNode();
        }
        currentNode.setNextNode(newTail);
    }

    removeHead() {
        const removedHead = this.head;
        if (removedHead) {
            return (this.head = removedHead.getNextNode());
        }
        console.log(`No head to remove!`);
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode) {
            output += currentNode.data + ' --> ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

let first = new LinkedList();
first.addHead('This is first data passed in');
first.printList();
first.addTail('NEXT');
first.printList();
first.removeHead();
first.printList();

module.exports = LinkedList;

// addHead(data) {
//     let newHead = new Node(data);
//     let currentHead = this.head;
//     this.head = newHead;
//     if (currentHead) {
//         this.head.setNextNode(currentHead)
//     }
// }

// addTail() Method

// create new tail variable
// must be instantiated member of Node class
// create current node variable set equal to this head;
// if current node does not exist
// use helper function created already
// return addHead(new tail variable)
// must have return statement!
// create while loop
// under which the expression of current node's next node is truthy, the while loop may run
// change current node to equal current node's next node
// exit while loop
// set current node's next node equal to new tail variable

// removeHead() method
// create a removed head variable set equal to this head
// if removed head exists
// set this head = removed head's next node
// else let user know it does not exist
