/*

00000011
00010000

create a function setNthBit (num, bit);
left shift nth bit as many times as the argument declares
OR the bits together to form a new number
return that number
*/

function setNthBit(num, bit) {
    const checkBit = 1 << bit;
    const orBit = num | checkBit;
    return orBit;
}

setNthBit(3, 5);

console.log(setNthBit(3, 5).toString(2))
