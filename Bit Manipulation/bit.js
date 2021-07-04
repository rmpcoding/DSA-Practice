const singleNumber = (nums) => {
    return nums.reduce((acc, num) => {
        // console.log(acc ^ num)
        console.log((acc ^ num).toString(2));
        return acc ^ num;
    });
};

let array = [1, 1, 2, 2, 3];
let mixArr = [1, 2, 3, 4, 3, 2, 1];

console.log(singleNumber(mixArr));

// swap int a, b without a temporary variable
// a ^= b;
// b ^= a; // now b is equal to a. because (a^b)^b = a.
// a ^= b; // now a is equal to b, because (a^b)^a = b.

/*
    @supercow If the accumulator is a bank of light switches initially off, then XORing with an entry is just flipping all the switches that don't match. Doing it again undoes the flip corresponding set of flips, give or take some entanglement with the other numbers. You're left with just the odd number.

    Try it first with a 1-bit number, then 2, then 4, etc. You can print a in binary if that helps.

    Another thing to try is to sort the array first and watch what happens, then move one of them out fo sequence. It's hard to build an intuition for it.
*/
// function getNthBit(num, n) {
    // create variable checkBit 
        // left shift 1 over by n to set bit in proper position.
    // create variable andBit
        // AND our num with checkBit to see our returned value
    // if checkBit matches andBit
        // return 1
    // else return 0.
// }

// write a function to get the nth bit of a number.




