// // 2. Sum All Numbers in an Array

// 🛠️ Hard Code Solution

// 🔍 Explanation
// Initialize sum = 0.
// Loop through each element using for.
// Add each number to sum.
// Return the final sum.

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // ➞ 15

// 🚀 Modern Solution

// 🔍 Explanation

// Uses .reduce() – Eliminates the need for for loops.
// Accumulator (sum) starts at 0.
// Each number is added to sum.
// ✅ Why is this better?

// No manual loop – .reduce() does everything for us.
// Concise – Just one line instead of multiple.

const sumArray1 = (arr) => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray1([1, 2, 3, 4, 5])); // ➞ 15
