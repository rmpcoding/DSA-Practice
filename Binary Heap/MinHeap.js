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
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    bubbleUp() {
        let current = this.size;

        while (
            current > 0 &&
            this.heap[getParent(current)] > this.heap[current]
        ) {
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }
}