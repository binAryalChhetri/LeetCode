// Here are all the problems of Leet Code I have solved to date

// 1480. Running Sum of 1d Array

// In this problem we take an array as input from the user.
// Then we return the running sum of that array by using the map method.
const runningSum = (nums) => {
  let sum = 0;
  return nums.map((num) => (sum += num));
};

// Here the ouput will be calculated as given below.
// Output = [2, 2+3, 2+3+4, 2+3+4+5, 2+3+4+5+6] => [2,5,9,14,20]
runningSum([2, 3, 4, 5, 6]);

// 13. Roman to Integer

/* ✅Approach for code
Create an unordered map (romanValues) to store the integer values corresponding to each Roman numeral symbol ('I', 'V', 'X', 'L', 'C', 'D', 'M').
Initialize a variable result to 0 to store the accumulated integer value.
Iterate through the input string s from right to left (starting from the last character).
For each character at index i, get its integer value (currValue) from the romanValues map.
Check if the current symbol has a smaller value than the symbol to its right (i.e., currValue < romanValues[s[i + 1]]) using the condition i < s.length() - 1. If true, subtract currValue from the result; otherwise, add it to the result.
Update the result accordingly for each symbol as you iterate through the string.
Finally, return the accumulated result as the integer equivalent of the Roman numeral.
 */

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInteger = (romanNum) => {
  let sum = 0;
  for (let i = romanNum.length - 1; i >= 0; i--) {
    const currValue = symbols[romanNum[i]];

    if (i < romanNum.length - 1 && currValue < symbols[romanNum[i + 1]]) {
      sum -= currValue;
    } else {
      sum += currValue;
    }
  }
  return sum;
};

const result1 = romanToInteger("MX");

// 58. Length of Last Word

const lengthOfLastWord = (sentence) => {
  const inputToArray = sentence.split(" ");
  const finalOutput = inputToArray.filter((element) => {
    if (element !== "") {
      return element;
    }
  });

  const lasWordLength = finalOutput.pop().length;
  return lasWordLength;
};

const lengthOfWord = lengthOfLastWord("   fly me   to   the moon  ");

// 66. Plue One
const plusOne = function (digits) {
  const integer = digits.join("");
  const ouputInteger = BigInt(integer) + 1n; // Here we're using BigInt to handle the number with many digits
  const outputIntegerInArray = String(ouputInteger).split("");

  return outputIntegerInArray;
};

const result = plusOne([
  6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
]);
