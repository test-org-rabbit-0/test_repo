console.log("hello world")

// This function calculates the factorial of a given number
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// This function checks if a number is prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true; // Bug: Incorrectly considers 1 as a prime number
}

// This function reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases
console.log(factorial(5)); // Expected output: 120
console.log(isPrime(7));   // Expected output: true
console.log(reverseString("hello")); // Expected output: "olleh"
