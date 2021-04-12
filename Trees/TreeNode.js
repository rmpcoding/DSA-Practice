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
        if (node instanceof TreeNode || null) {
            this.children.push(node);
        } else {
            this.children.push(new TreeNode(node))
        }
    }
}