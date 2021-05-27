/* -------------------------------------------------------------------------- */
/*    This measures performance benchmarks when you swap out each function    */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- DOCS ---------------------------------- */
/* -------------------------------------------------------------------------- */
/*       https://nodejs.org/api/process.html#process_process_hrtime_time      */
/* -------------------------------------------------------------------------- */

const present = require('present')


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

// Try comparing 6, then 600, then 600000000
console.log(addNumbersConstant(600000000));

const difference = process.hrtime(time);

const performanceInNanoSeconds = difference[0] * NS_PER_SEC + difference[1];

const seconds = performanceInNanoSeconds / 1000000000;

console.log(`
Performance: ${performanceInNanoSeconds} nanoseconds
Performance: ${seconds} seconds
`);

console.log(present())
console.log('----------')
console.log(present())


