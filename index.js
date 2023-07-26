// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseStr = (inputStr) => [...inputStr].reduceRight((reversed, character) => reversed + character, '');

const originalStr = "Task-1 Solved";
const reversed = reverseStr(originalStr);
console.log(reversed);



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.


function positiveNumSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const numbers = [2, -5, 10, -3, 7];
const total = positiveNumSum(numbers)
console.log(total);



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.


function findMostFrequentElement(arr) {
  let frequentElement = null;
  let maximumElement = 0;

  for (const element of arr) {

    let currentElements = 0;

    for (const num of arr) {
      if (num === element) {
        currentElements++;
      }
    }

    if (currentElements > maximumElement) {
      frequentElement = element;
      maximumElement = currentElements;
    }
  }

  return frequentElement;
}

const elements = [3, 5, 4, 4, 4, 5, 2, 5, 3, 3, 1, 4, 4, 5];
const result = findMostFrequentElement(elements);
console.log(result);




// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function twoNumbersWithSum(arr, target) {
  let num1 = 0;
  let num2 = arr.length - 1;

  while (num1 < num2) {
    const sum = arr[num1] + arr[num2];

    if (sum === target) {
      return [num1, num2];
    } else if (sum < target) {
      num1++;
    } else {
      num2--;
    }
  }

  return []; 
}
const targetValue = 11;

const input = [1, 2, 3, 4, 6, 8, 11, 15];

const indices = twoNumbersWithSum(input, targetValue);
console.log(indices);



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
