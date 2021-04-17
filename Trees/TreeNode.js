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

    removeChild(node) {
        // create a children variable referring to children array
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

        let children = this.children;
        const length = this.children.length;

        children = children.filter(child => {
            if (node instanceof TreeNode) {
                return child !== node;
            } else return child.data !== node;
        })

        if (length === this.children.length) {
            this.children.forEach(child => {
                child.removeChild(node);
            })
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