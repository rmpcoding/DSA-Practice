const bubbleSort = input => {
    let swapping = true;

    while (swapping) {
        swapping = false;
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i + 1]) {
                swap(input, i, i + 1);
                swapping = true;
            }
        }
    }
    return input;
}

const swap = (array, indexOne, indexTwo) => {
    const temp = array[indexTwo];
    array[indexTwo] = array[indexOne];
    array[indexOne] = temp;
}