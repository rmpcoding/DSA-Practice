class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    // getNextNode()
    getNextNode() {
        return this.next;
    }

    // setNextNode()
    setNextNode(data) {
        if (data instanceof Node || data === null) {
            this.next = data;
        } else
            throw new Error(
                'Node data must be an instantiated member of the Node class, or be null'
            );
    }
}

const firstNode = new Node('First Node!');
const secondNode = new Node('Second Node!');

console.log(firstNode.getNextNode());

firstNode.setNextNode(secondNode);

console.log(firstNode.getNextNode());