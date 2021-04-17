class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(node) {
        if (node instanceof TreeNode) {
            this.children.push(node);
        } else {
            this.children.push(new TreeNode(node));
        }
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
            node instanceof TreeNode ? 
              child !== node : 
              child.data !== node;
        });

        if (length === this.children.length) {
            this.children.forEach((child) => {
                child.removeChild(node);
            });
        }
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
const node = new TreeNode(30);
tree.addChild(node);

console.log(tree);

tree.removeChild(15);

console.log(tree);

tree.removeChild(node);

console.log(tree);

tree.print();
