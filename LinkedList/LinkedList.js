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


linkedList.addHead("I'm the tail!");
linkedList.printList();
linkedList.addHead("I'm the head!");
linkedList.printList();
linkedList.addHead("I'm the head! 2 2");
linkedList.printList();
linkedList.addTail("I'm the Tail!");
linkedList.printList();
linkedList.clear();
linkedList.printList();

