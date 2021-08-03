const random = amount => new Array(amount).fill().map(() => ~~(Math.random() * 100));

const number = ~~(Math.random() * 40);

module.exports = random;