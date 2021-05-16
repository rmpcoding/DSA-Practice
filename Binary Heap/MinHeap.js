const getParent = (index) => Math.floor((index - 1) / 2);
const getLeft = (index) => index * 2;
const getRight = (index) => index * 2 + 1;

class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    insert(value) {
        this.heap.push(value);
        this.size++;
    }

    swap(a, b) {
        this.heap[a], this.heap[b] = this.heap[b], this.heap[a]
    }

    bubbleUp() {
        let current = this.size;

        while (this.heap[getParent(current)] > this.heap[current]) {

        }
    }
}
