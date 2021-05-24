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
        this.bubbleUp();
    }

    popMin() {
        if (!this.size) return null;

        this.swap(0, this.size);
        const min = this.heap.pop();
        this.size--;
        this.heapify(); // this doesn't exist yet
        return min;
    }

    exists(index) {
        return index <= this.size;
    }

    canSwap(current, leftChild, rightChild) {
        return (
            (this.exists(leftChild) &&
                this.heap[current] > this.heap[leftChild]) ||
            (this.exists(rightChild) &&
                this.heap[current] > this.heap[rightChild])
        );
    }

    heapify() {
        let current = 0;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);

        while (this.canSwap(current, leftChild, rightChild)) {
            if (this.exists(leftChild) && this.exists(rightChild)) {
                if (leftChild < rightChild) {
                    this.swap(current, leftChild);
                    current = getLeft(current);
                } else {
                    this.swap(current, rightChild);
                    current = getRight(current);
                }
            } else {
                this.swap(current, getLeft(current));
                current = getLeft(current);
            }

            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
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
