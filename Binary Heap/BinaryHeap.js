const getParent = index => Math.floor( (index / 2) )
const getLeft = index => index * 2;
const getRight = index => index * 2 + 1;

class BinaryHeap {
    constructor() {
        this.heap = [];
    }
}