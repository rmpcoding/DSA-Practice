class BST_Node_00 {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree_00 {
    constructor() {
        this.root = null;
    }

    insertNode(node) {
        let instantiatedNode = new BST_Node_00(node);

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

const BST = new BinarySearchTree_00();

BST.insertNode(9);
BST.insertNode(4);
BST.insertNode(6);
BST.insertNode(20);
BST.insertNode(170);
BST.insertNode(15);
BST.insertNode(1);

console.log(JSON.stringify(BST));
