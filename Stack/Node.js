class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }

    getNextNode() {
        return this.next;
    }

    setNextNode(data) {
        if (data instanceof Node || data === null) {
            this.data = data;
        } else {
            console.log(`'${data}' is not an instantiated member of the Node class`)
        }
    }
}

module.exports = Node;