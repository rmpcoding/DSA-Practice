var factorial = function (number) {
    if (number <= 0) {
        // terminal case
        return 1;
    } else {
        // block to execute
        console.log(number)
        return  number * factorial(number - 1) 
    }
};
console.log(factorial(5));
// 120

const count = (num) => {
    if (num <= 0) {
        return 1
    }
    console.log(num - 1)
    return count(num - 1)
}

// console.log(count(5))
