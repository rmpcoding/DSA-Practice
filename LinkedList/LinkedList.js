const Node = require('./Node');
class LinkedList {
    constructor(head = null) {
        this.head = head;
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
        let tail = this.head;
        let newTail = new Node(data)

        if (!tail) {
            this.addHead(data)
        } else {
            while(tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(newTail)
        }
    }

    clear() {
        this.head = null;
    }

    getSize() {
        let count = 1;
        let currentNode = this.head;

        if (currentNode) {
            while(currentNode.getNextNode()) {
                currentNode = currentNode.getNextNode();
                count++
            }
            console.log(count);
        } else console.log('Linked List is empty!')
    }

    printList() {
        let currentNode = this.head;6
        let output = '<head> ';
        while (currentNode) {
          output += currentNode.data + ' --> ';
          currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

let linkedList = new LinkedList();

linkedList.getSize()
linkedList.addHead("I'm the tail!");
linkedList.printList();
linkedList.addHead("I'm the head!");
linkedList.printList();
linkedList.addHead("I'm the head! 2 2");
linkedList.printList();
linkedList.addTail("I'm the Tail!");
linkedList.printList();
linkedList.getSize();
linkedList.clear();
linkedList.printList();

