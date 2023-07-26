// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseStr = (inputStr) => [...inputStr].reduceRight((reversed, character) => reversed + character, '');

const originalStr = "Task Solved";
const reversed = reverseStr(originalStr);
console.log(`Task-1: "${originalStr}" reversed version :`, reversed);



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
console.log('Task-2: Sum of all positive numbers : ', total);



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
console.log('Task-3: Most frequent element : ', result);




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
console.log('Task-4: Indices of the two numbers : ', indices);



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.



const n1 = 10;
const operator = "+";
const n2 = 5;

function calculator(n1, operator, n2) {
  if (operator === '+') {
    return n1 + n2;
  } else if (operator === '-') {
    return n1 - n2;
  } else if (operator === '*') {
    return n1 * n2;
  } else if (operator === '/') {
    if (n2 === 0) {
      return "Invalid";
    }
    return n1 / n2;
  } else {
    return "Please input valid number or operator"
  }
}

const calculation = calculator(n1, operator, n2);
console.log('Task-5: Calculated Result :', calculation);




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&';

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log('Task-6: Generated Password : ', randomPassword);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
  const romanNumeral = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  let prevValue = 0;
 
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentNumeral = roman[i];
    const currentValue = romanNumeral[currentNumeral];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}
const resultInInt = romanToInt("III");
console.log('Task-7: Result in Integer : ', resultInInt);


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return undefined;
  }

  const smallest = Math.min(...arr);
  const restNum = arr.filter(num => num !== smallest);
  const secondSmallestNum = restNum.reduce((prev, curr) => Math.min(prev, curr));

  return secondSmallestNum;
}

const numbersGiven = [4, 20, 7, 10, 5, 3];
const resultOf2ndSmallest = findSecondSmallest(numbersGiven)
console.log('Task-8 : Second smallest element :', resultOf2ndSmallest,);

