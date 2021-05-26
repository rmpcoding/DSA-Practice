class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addAChild(node) {
        if (!(node instanceof TreeNode)) this.children.push(new TreeNode(node));
    }

    addChild(node) {
        if (node instanceof TreeNode) {
            this.children.push(node);
        } else {
            this.children.push(new TreeNode(node));
        }
    }

    removeAChild(node) {
        const length = this.children.length;

        this.children = this.children.filter((child) => {
            return node instanceof TreeNode
                ? child !== node
                : child.data !== node;
        });

        if (length === this.children.length)
            this.children.forEach((child) => {
                child.removeAChild(node);
            });
    }

    removeChild(node) {
        // keep original length of our array by
        // creating a const of the children's array length
        // check if node is an instance of our TreeNode class
        // filter over this children array to
        //  return a new array without the node which matches our passed in node
        // or else
        // filter over this children array to
        // return a new array without the node which matches our passed in node's data property.
        // if our filter method works, it will reduce our array by one
        // as such, if our length constant is the same as our instance of children array's length
        // recurse for each child in the array, calling on the removeChild() method.

        const length = this.children.length;

        this.children = this.children.filter((child) => {
            return node instanceof TreeNode
                ? child !== node
                : child.data !== node;
        });

        if (length === this.children.length) {
            this.children.forEach((child) => {
                child.removeChild(node);
            });
        }
    }

    breadthFirstTraversal() {
        let queue = [this];
        console.log(queue);
        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }

    depthFirstTraversal() {
        this.children.forEach((child) => {
            console.log(this.data);
            child.depthFirstTraversal();
        });
    }

    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach((child) => child.print(level + 1));
    }
}

const tree = new TreeNode(1);

tree.addChild(15);
tree.addChild(30);

// tree.removeChild(15);

console.log(tree);

// tree.removeChild(node);

tree.print();
console.log('======================================');
tree.depthFirstTraversal();
console.log('======================================');
tree.breadthFirstTraversal();
