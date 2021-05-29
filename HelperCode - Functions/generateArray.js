export const random = new Array(8).fill().map(() => ~~(Math.random() * 100));

export const number = ~~(Math.random() * 40);

console.log(random);
console.log(number);
