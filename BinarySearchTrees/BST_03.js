function BST_Node_03(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree02() {
    this.root = null;
}

BinarySearchTree02.prototype.insert = function (node) {
    if (!(node instanceof BST_Node_03)) node = new BST_Node_03(node);
    if (!this.root) {
        this.root = node;
        return this;
    }

    let current = this.root;

    while (true) {
        if (node.value < current.value) {
            if (!current.left) {
                current.left = node;
                return this;
            }
            current = current.left;
        } else {
            if (!current.right) {
                current.right = node;
                return this;
            }
            current = current.right;
        }
    }
};

BinarySearchTree02.prototype.breadthFirstSearch = function () {
    const queue = [this.root];
    const results = [];
    let current;

    while (queue.length) {
        current = queue.shift();
        results.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return results;
};

let tree = new BinarySearchTree02();

console.log(tree.insert(100))

