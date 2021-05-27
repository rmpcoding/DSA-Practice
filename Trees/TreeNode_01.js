class TreeNode_01 {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addANode(value) {
        if (!(value instanceof TreeNode_01)) value = new TreeNode_01(value);
        this.children.push(value);
    }

    
}