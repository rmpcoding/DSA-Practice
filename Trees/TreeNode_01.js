class TreeNode_01 {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addANode(value) {
        if (!(value instanceof TreeNode_01)) value = new TreeNode_01(value);
        this.children.push(value);
    }

    removeANode(node) {
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
}