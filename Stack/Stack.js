const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this.stack.head.data;
    }

    push(data) {
        if (this.hasRoom()) {
            this.stack.addHead(data);
            this.size++;
            console.log(
                `'${data}' was added to the stack! The stack is now ${this.size}`
            );
        } else throw new Error('Stack overflow!');
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else throw new Error(`Stack is empty!`);
    }
}

let stack = new Stack();

stack.push('Some Data!');

console.log(stack.peek());
