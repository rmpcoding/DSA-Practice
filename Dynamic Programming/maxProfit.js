const generateArray = require('../HelperCode - Functions/generateArray');

console.log(generateArray(32));

const stocks = [
    10, 81, 17, 23, 32, 12, 87, 29, 53, 94, 4, 78, 58, 4, 86, 1, 40, 82, 63, 57,
    36, 19, 3, 95, 62, 71, 80, 33, 85, 15, 1, 79,
];

function maxProfit(arr) {
    // create a maxProfit variable set to zero, initially
    // create a minProfit variable set to first array's index
    // create a for-loop to iterate over our input array
    // if our current index is smaller than our next index,
    // minProfit equals our smaller, next index
    // else
    // compare (next index minus current index) against maxProfit.
    // if that's greater than maxProfit,
    // maxProfit sets equal to that.
    // return maxProfit

    let maxProfit = 0;
    let minValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
        } else {
            if (arr[i] - minValue > maxProfit) {
                maxProfit = arr[i] - minValue;
            }
        }
    }
    return maxProfit;
}

console.log(maxProfit(stocks));

/*
[3, 1, 6]



*/
