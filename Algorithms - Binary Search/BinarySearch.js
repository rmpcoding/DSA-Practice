const binarySearch = (array, target) => {
    const left = 0;
    const right = array.length;

    while (right > left) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = arr[indexToCheck];
        
        if (checking === target) return indexToCheck;

        if (checking < target) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck;
        }
    }
    return null;
};
