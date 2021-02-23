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
            this.head.setNextNode(currentHead);
        }
    }

    removeHead() {
        let removedHead = this.head;
        if (removedHead) {
            this.head = this.head.getNextNode();
            return console.log(`'${removedHead.data}' was removed from the head.`)
        } else {
            console.log('No head to remove!')
        }
    }

    addTail(data) {
        let tail = this.head;
        let newTail = new Node(data);

        if (!tail) {
            this.addHead(data);
        } else {
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(newTail);
        }
    }

    clear() {
        this.head = null;
    }

    getHead() {
        let head = this.head;
        head ? console.log(head.data) : console.log('Linked List is empty!');
    }

    getSize() {
        let count = 1;
        let currentNode = this.head;

        if (currentNode) {
            while (currentNode.getNextNode()) {
                currentNode = currentNode.getNextNode();
                count++;
            }
            console.log(count);
        } else console.log('Linked List is empty!');
    }

    getLast() {
        let tail = this.head;
        if (!tail) {
            console.log('Linked List is empty!')
        } else {
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            console.log(tail.data)
        }
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

let linkedList = new LinkedList();

linkedList.addHead("I was once a head");
linkedList.printList();
linkedList.addHead("Now I'm the head!!");
linkedList.printList();
linkedList.addHead("PSYCH! I'm the head now!!!");
linkedList.printList();
linkedList.addTail("I'm the TAIL!!");
linkedList.printList();
linkedList.removeHead();
linkedList.printList();
linkedList.clear();
linkedList.addTail("I'm the TAIL!!");


