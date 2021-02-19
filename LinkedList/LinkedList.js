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
            currentHead.setNextNode(currentHead)
        }
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
          output += currentNode.data + ' ';
          currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

let linkedList = new LinkedList();


linkedList.addHead('First head on the list!');
linkedList.addHead("Now I'm the head, the second one");
linkedList.printList();

