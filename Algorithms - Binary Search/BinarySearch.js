const binarySearch = (array, target) => {
    // takes two arguments
    // create variable for lower bound (0);
    // create variable for upper bound (array.length);

    // while upper bound is greater than lower bound
        // create a variable indexToCheck (Math.floor((left + right)) / 2)
        // create a variable checking (array[indexToCheck])
        // if target equals checking return checking because that's our index
        // if checking is less than target
            // left is now equal to indexToCheck + 1
        // else
            // right is now equal to indexToCheck
    // return null
    
    let left = 0;
    let right = array.length;

    while (right > left) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = array[indexToCheck];

        if (checking === target) return indexToCheck;

        if (checking < target) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck;
        }
    }
    return null;
};


const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);