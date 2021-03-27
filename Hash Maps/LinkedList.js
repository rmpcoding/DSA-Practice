const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // addHead

    addHead(data) {
        // let new head become a member of Node class; set as const
        // let current head equal this head
        // if head exists
            // make new head's next node equal to current head node
        // or else
            // this head will be equal to new head

        let newHead = new Node(data);
        let previousHead = this.head;
        
        this.head = newHead;

        if (previousHead) {
            this.head.setNextNode(previousHead);
        } 
        
    }

    // addTail
    // removeHead


}