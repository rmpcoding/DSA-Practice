const LinkedList = require('./LinkedList');

class Queue {
    constructor() {
        // Queue has the Queue itself as a property, which is actually a LinkedList
        this.queue = new LinkedList;
        // Queue has a size property
        this.size = 0;
        // Queue has a maxSize property
            // Defines whether Queue is bounded or not
        this.maxSize = Infinity;
    }

    // Methods by which we manipulate the Queue
        // Enqueue
        enqueue(data) {
            this.queue.addTail(data);
            this.size++;
            console.log(`${data} was added to the queue!`)
        }
        // Dequeue
        dequeue() {
            const dequeue = this.queue.removeHead();
            this.size--;            
            console.log(`'${dequeue}' was removed from the queue!`)
        }
        // Peek

}

let queue = new Queue;

queue.enqueue('data here')

console.log(queue)

queue.dequeue();

console.log(queue)