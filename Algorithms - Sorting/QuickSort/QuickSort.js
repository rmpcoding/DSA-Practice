const random = require('../../HelperCode - Functions/generateArray')

function pivot(array, left, right) {
    const pivot = array[Math.floor(array.length / 2)];
    return pivot;
}

const array = [96, 3, 90, 13, 78, 18, 93, 75];

console.log(random)
console.log(pivot(array));
