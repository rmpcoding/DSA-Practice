class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getNextNode() {
        return this.next;
    }

    setNextNode(data) {
        if (data instanceof Node || data === null) {
            this.next = data;
        } else {
            console.log(`${data} must be part of the Node class.`)
        }
    }
}

module.exports = Node;