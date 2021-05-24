const mergeSort = (array) => {
    if (array.length === 1) return array;
    const length = array.length;
    const mid = Math.floor(length / 2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
        leftArray[0] < rightArray[0]
            ? (sortedArray.push(leftArray[0]), leftArray.shift())
            : (sortedArray.push(rightArray[0]), rightArray.shift());
    }

    return sortedArray.concat(leftArray).concat(rightArray);
};


const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));