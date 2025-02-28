// 📌 7. Double Each Number in an Array

// 🛠️ Hard Code Solution

function doubleNumbers(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
}
console.log(doubleNumbers([1, 2, 3, 4])); // ➞ [2, 4, 6, 8]

// this is whitout useing push, but push help avoid more code and looks more clean

// function doubleNumbers(array) {
//   let index = 0;
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result[index] = array[i] * 2;
//     index++;
//   }
//   return result;
// }

// 🚀 Modern Solution

// //🔍 Explanation

// Uses .map() to modify each element.
// Each number is multiplied by 2.
// Returns a new array without modifying the original.
// ✅ Why is this better?

// Less code & better performance.

const doubleNumbers = (arr) => arr.map((num) => num * 2);

console.log(doubleNumbers([1, 2, 3, 4])); // ➞ [2, 4, 6, 8]
