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

BinarySearchTree02.prototype.find = function(node) {
    // if this root does not exist, return false
    // if this root's value IS our node to find, return true
    // create a variable current set equal to this tree's root
    // create while loop to run under condition of true
        // if current node's value is strictly equal to node
            // return true;
        // if node is less than current node's value
            // if current's left node does NOT exist
                // return false
            // set current equal to current's left node
        // else
            // if current's right node does not exist
                // return false
            // set current equal to current's right node

    if (this.root === null) return false;
    if (this.root.value === node) return true;
    
    let current = this.root;

    while(true) {
        if (current.value === node) return true;
        if (node < current.value) {
            if (!current.left) return false;
            current = current.left;
        } else {
            if (!current.right) return false;
            current = current.right;
        }
    }
        
}

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

tree.insert(100)
tree.insert(50)
tree.insert(75)
tree.insert(115)
tree.insert(110)
tree.insert(125)
tree.insert(25)
tree.insert(10)

console.log(tree.find(9))