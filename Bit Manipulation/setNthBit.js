/*

00000011
00010000

create a function setNthBit (num, bit);
left shift nth bit as many times as the argument declares
OR the bits together to form a new number
return that number
*/

function setNthBit(number, bitPosition) {
    const checkBit = 1 << bitPosition;
    const orBit = number | checkBit;
    return orBit;
}

console.log(setNthBit(3, 5).toString(2))

const setNthBitShort = (num, bit) => {
    return (1 << bit) | num;
}

console.log(setNthBitShort(3, 5).toString(2))