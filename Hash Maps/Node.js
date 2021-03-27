class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(data) {
        if (data instanceof Node || data === null) {
            this.next = data;
        } else throw new Error('Data must be a member of Node class!')
    }
}

module.exports = Node;

