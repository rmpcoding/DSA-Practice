const NS_PER_SEC = 1e9;
const time = process.hrtime();

function addNumbersForLoop(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

function addNumbersConstant(n) {
    return (n * (n + 1)) / 2;
}

console.log(addNumbersConstant(600000000));

const difference = process.hrtime(time);

const performanceInNanoSeconds = difference[0] * NS_PER_SEC + difference[1];

const seconds = performanceInNanoSeconds / 1000000000;

console.log(seconds);

console.log(`
Performance: ${performanceInNanoSeconds} nanoseconds
Performance: ${seconds} seconds
`);
