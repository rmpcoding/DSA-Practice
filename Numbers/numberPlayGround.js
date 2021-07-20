let array = [1, 2, 3, 4, -95];

// console.log(Math.min(...array));
// console.log(Number.MIN_VALUE);

// hoistExample('Hello, I am hoisted yo!');

// function hoistExample(data) {
//     console.log(data);
// }

// const hoistExample = (data) => {
//     console.log(data);
// };

array = array.filter((num) => {
    return num > 0;
});

// console.log(array);
// console.log(filteredArray);

function addNumbersForLoop(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

const NS_PER_SEC = 1e9;
const time = process.hrtime();

console.log(time);

const difference = process.hrtime(time);

console.log(addNumbersForLoop(60000000));

console.log(difference);

const performanceInNanoSeconds = difference[0] * NS_PER_SEC + difference[1];

const seconds = performanceInNanoSeconds / 1000000000;

console.log(seconds);

console.log(`
Performance: ${performanceInNanoSeconds} nanoseconds
Performance: ${seconds} seconds
`);



