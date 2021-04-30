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
        // return boolean  
        // if there is a root
            // if not, search is over;
        // if there is a root, check if node is equal to root's value
            // if so, search is over;
        // create variable current set equal to this root
        // create a while loop
            // while true
        // if there is a root, check if node is greater than root
            // if it is greater
                // check to see if there is a node to the right;
                // if so, current will be current's right node
                // if not, add that node as current's right node
            // if it is less
                // check to see if there is a node to the left;
                // if so, move to that node and commence new iteration
                // if not, that's our node;
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
            console.log(this)
            return;
        }

        let current = this.root;

        while (true) {
            if (instantiatedNode.value === current.value) return undefined
            if (instantiatedNode.value < current.value) {
                if (!current.left) {
                    current.left = instantiatedNode;
                    console.log(this)
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
}

let tree = new BinarySearchTree_01();

tree.insert(100);
tree.insert(50);
tree.insert(25);
tree.insert(27);
tree.insert(15);
tree.insert(125);
tree.insert(225);
tree.insert(220);
tree.insert(525);

console.log(JSON.stringify(tree));
