console.log("hello worlds!!!!")


function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function findLargestNumber(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

const result1 = sum(5, 10);
const result2 = multiply(3, 4);
const result3 = divide(10, 0);
const result4 = findLargestNumber([1, 7, 4, 9, 3]);

const result5 - result1 + result2 - result3;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
