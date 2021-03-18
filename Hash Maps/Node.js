class Node {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null);
    }
}

modules.export = Node;