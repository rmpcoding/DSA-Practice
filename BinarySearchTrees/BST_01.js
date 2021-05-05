class BST_Node_01 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree_01 {
    constructor() {
        this.root = null;
    }

    find(node) {
        if (!this.root && this.root !== 0) return false;
        if (!(node instanceof BST_Node_01)) node = new BST_Node_01(node);
        if (this.root.value === node.value) return true;

        let current = this.root;

        while (true) {
            if (node.value === current.value) return true;

            if (node.value < current.value) {
                if (!current.left) return false;
                current = current.left;
            } else {
                if (!current.right) return false;
                current = current.right;
            }
        }
    }

    insert(node) {
        let instantiatedNode;

        if (node instanceof BST_Node_01 === false) {
            instantiatedNode = new BST_Node_01(node);
        } else {
            instantiatedNode = node;
        }

        if (!this.root) {
            this.root = instantiatedNode;
            // console.log(this)
            return;
        }

        let current = this.root;

        while (true) {
            if (instantiatedNode.value === current.value) return undefined;
            if (instantiatedNode.value < current.value) {
                if (!current.left) {
                    current.left = instantiatedNode;
                    // console.log(this)
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = instantiatedNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // breadthFirstSearch() {
    //     const queue = [this.root];
    //     let visitedNodes = [];
    //     let current;

    //     while (queue.length) {
    //         current = queue.shift();
    //         visitedNodes.push(current.value);

    //         if (current.left) queue.push(current.left);
    //         if (current.right) queue.push(current.right);
    //     }
    //     return visitedNodes;
    // }


    breadthFirstSearch() {
        // create a queue with our tree root's value
        // create an array to hold our visited nodes
        // create a current node variable
        // while the queue's length is greater than 0
            // dequeue the current node and store it in a variable current
            // push current into visited node's array
            // if current node's left node exists
                // push into queue
            // if current node's right node exists
                // push into queue
        const queue = [this.root];
        const visitedNodes = [];
        let current;

        while (queue.length) {
            current = queue.shift();
            visitedNodes.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return visitedNodes;
    }
}

let tree = new BinarySearchTree_01();

// tree.insert(100);
// tree.insert(10);
// tree.insert(75);
// tree.insert(125);
// tree.insert(110);
// tree.insert(225);
// tree.insert(220);
// tree.insert(525);

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree.find(100));
// console.log(tree.find(10));
// console.log(tree.find(75));
// console.log(tree.find(125));
// console.log(tree.find(110));

// console.log(tree.breadthFirstSearch())
// tree.breadthFirstSearch();
console.log(tree.breadthFirstSearch());

// console.log(JSON.stringify(tree));
