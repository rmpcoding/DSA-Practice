const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        // Queue has the Queue itself as a property, which is actually a LinkedList
        this.queue = new LinkedList();
        // Queue has a size property
        this.size = 0;
        // Queue has a maxSize property
        // Defines whether Queue is bounded or not
        this.maxSize = maxSize;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    // Methods by which we manipulate the Queue
    // Enqueue
    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addTail(data);
            this.size++;
            console.log(
                `'${data}' was added to the queue! The queue is now ${this.size}`
            );
        } else throw new Error(`The Queue has no more room to add new data!`)
    }
    // Dequeue
    dequeue() {
        if (!this.isEmpty()) {
            const dequeue = this.queue.removeHead();
            this.size--;
            console.log(`'${dequeue}' was removed from the queue!`);
            return dequeue;
        } else throw new Error('Queue is empty!');
    }
    // Peek
}

let queue = new Queue();

console.log(queue);
