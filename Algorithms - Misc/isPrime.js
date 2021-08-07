// Write a function to check whether an integer n is prime. Assume the integer will always be positive. 

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(67))
console.log(isPrime(66))