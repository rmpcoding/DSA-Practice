class TreeNodePractice1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST_Practice1 {
    constructor() {
        this.root = null;
    }

    insert(node) {
        let instantiatedNode = new TreeNodePractice1(node);

        // if (node instanceof TreeNodePractice1 === false) {
        //     node = new TreeNodePractice1(node)
        //     // console.log(node)
        // }

        if (!this.root) {
            this.root = instantiatedNode;
            return;
        }

        // iteratively

        let current = this.root;
        console.log(this.root);

        while (true) {
            if (instantiatedNode.value < this.root.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = instantiatedNode;
                    return;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = instantiatedNode;
                    return;
                }
            }
        }
    }
}

let tree = new BST_Practice1();

tree.insert(100);
tree.insert(50);
tree.insert(25);
tree.insert(27);
tree.insert(15);
tree.insert(125);
tree.insert(225);
tree.insert(525);

console.log(JSON.stringify(tree));
