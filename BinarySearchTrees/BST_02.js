function BST_Node_02(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree02() {
    this.root = null;
}

BinarySearchTree02.prototype.insert = function (node) {
    if (!(node instanceof BST_Node_02)) node = new BST_Node_02(node);
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

BinarySearchTree02.prototype.find = function (node) {
    if (this.root === null) return false;
    if (this.root.value === node) return true;

    let current = this.root;

    while (true) {
        if (current.value === node) return current;
        if (node < current.value) {
            if (!current.left) return false;
            current = current.left;
        } else {
            if (!current.right) return false;
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

BinarySearchTree02.prototype.dfsPreOrder = function () {
    const storedNodes = [];
    let current = this.root;
    function traverse(node) {
        storedNodes.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return storedNodes;
};

BinarySearchTree02.prototype.dfsPostOrder = function (current = this.root) {
    const storedNodes = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        storedNodes.push(node.value);
    }
    traverse(current);
    return storedNodes;
};

BinarySearchTree02.prototype.dfsInOrder = function (current = this.root) {
    const storedNodes = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        storedNodes.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return storedNodes;
};

let tree = new BinarySearchTree02();

tree.insert(100);
tree.insert(75);
tree.insert(50);
tree.insert(25);
tree.insert(10);
tree.insert(125);
tree.insert(115);
tree.insert(110);

console.log('Breadth First Search: ', tree.breadthFirstSearch());
console.log('DFS PreOrder: ', tree.dfsPreOrder());
console.log('DFS PostOrder: ', tree.dfsPostOrder());
console.log('DFS InOrder: ', tree.dfsInOrder());
