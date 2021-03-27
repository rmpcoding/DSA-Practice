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
        } else throw new Error('Data must be a member of the Node class!');
    }
}

module.exports = Node;
