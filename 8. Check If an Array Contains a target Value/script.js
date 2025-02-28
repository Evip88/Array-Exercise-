// 8. Check If an Array Contains a Value

//🛠️ Hard Code Solution

// 🔍 Explanation

// Loop through arr.
// Check if arr[i] === target.
// If found, return true.
// If loop finishes, return false.

function containsValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(containsValue([10, 20, 30, 40], 20)); // ➞ true
console.log(containsValue([1, 2, 3, 4, 5], 10)); // ➞ false

// 🚀 Modern Solution

// 🔍 Explanation

// Uses .includes(), which checks if a value exists.
// No need for a loop.
// ✅ Why is this better?

// One-liner instead of multiple lines.
// Optimized & built-in function.

const containsValue1 = (arr, target) => arr.includes(target);

console.log(containsValue1([10, 20, 30, 40], 20)); // ➞ true
console.log(containsValue1([1, 2, 3, 4, 5], 10)); // ➞ false
