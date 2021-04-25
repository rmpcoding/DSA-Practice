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
        let instantiatedNode;

        if (node instanceof TreeNodePractice1 === false) {
            instantiatedNode = new TreeNodePractice1(node);
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

let tree = new BST_Practice1();

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
