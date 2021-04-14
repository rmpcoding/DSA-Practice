// class TreeNode
// Needs to have two properties
// data passed in as a parameter
// children as an array
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
    
    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach((child) => child.print(level + 1));
    }
}
console.log('YouTube'.substring(1))