// create a checkBit variable
// LEFTSHIFT 1 over n times
// create an andBit variable
// AND our num against checkBit
// if andBit is truthy
// return 1
// else return 0;
function getNthBit(num, n) {
    let checkBit = 1 << n;
    let andBit = num & checkBit;

    if (andBit) return 1;

    return 0;
}

function shortenedGetNthBit(num, n) {
    if ((1 << n) & num) return 1;
    return 0;
}

function megaShortGetNthBit(num, n) {
    return (1 << n) & num ? 1 : 0;
}

console.log(megaShortGetNthBit(32, 5));
