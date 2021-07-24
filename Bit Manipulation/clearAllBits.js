function clearAllBits(number) {
    return ~number & number;
}

console.log(clearAllBits(132).toString(2))

/*
Clear all bits from any given number!

Take the binary representation for the number eleven.

1011
We NOT the number,
0100
then AND the NOT number
which will give us
0000

All bits cleared.
*/
