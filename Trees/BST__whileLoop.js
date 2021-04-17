class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(node) {
        let instantiatedNode = new TreeNode(node);

        if (this.root === null) {
            this.root = instantiatedNode;
            return;
        }

        let current = this.root;
        
        while (true) {
            if (node < current.data) {
                // left
                if (!current.left) {
                    current.left = instantiatedNode;
                    return this;
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = instantiatedNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    lookupNode(node) {}
}

const tree = new BinarySearchTree();

tree.insertNode(9);
tree.insertNode(4);
tree.insertNode(6);
tree.insertNode(20);
tree.insertNode(170);
tree.insertNode(15);
tree.insertNode(1);

console.log(JSON.stringify(tree));