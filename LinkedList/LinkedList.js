const Node = require('./Node');
class LinkedList {
    constructor() {
        this.head = null;
    }

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

    addTail(data) {
        let currentNode = this.head;
        let newTail = new Node(data)

        if (!currentNode) {
            this.addHead(data)
        }

        while (currentNode) {
            if (currentNode.getNextNode() === null) {
                this.head.setNextNode(newTail)
            }
            currentNode = currentNode.getNextNode()
        }
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ==> ';
        while (currentNode) {
          output += currentNode.data + ' --> ';
          currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

let linkedList = new LinkedList();


linkedList.addHead("I'm the tail!");
linkedList.addHead("I'm the head!");
linkedList.addHead("I'm the head! 2 2");
linkedList.addTail("I'm TAILLLLLL");
linkedList.printList();