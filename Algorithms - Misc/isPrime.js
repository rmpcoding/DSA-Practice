// Write a function to check whether an integer n is prime. Assume the integer will always be positive.

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

// console.log(isPrime(67));
// console.log(isPrime(66));

// console.log((0.1 + 0.2).toString(2));

/* ------------------------------- complexity ------------------------------- */
// time:  O(sqrt(n));
// space: O(1)
/* ------------------------------- complexity ------------------------------- */

// Date 10/02/2021
// spaced repetition follow up practice below:
function isItAPrime(n) {
    // create a for loop
    // iterate 2 thru n
    // for each number, mod it by n to see if we have a resulting 0
    // if so, return false
    // if we reach n, return true

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// console.log(isItAPrime(17))
// console.log(isItAPrime(15))
// console.log(isItAPrime(150))
// console.log(isItAPrime(1500))
// console.log(isItAPrime(2180))
// console.log(isItAPrime(2131))

/*

*/