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

console.log(array);
// console.log(filteredArray);
