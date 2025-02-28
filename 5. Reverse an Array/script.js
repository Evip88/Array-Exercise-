// 📌 5. Reverse an Array

// 🛠️ Hard Code Solution

// 🔍 Explanation

// Create an empty reversed array.
// Loop from last to first element.
// Push each element into reversed.
// Return reversed.

function reverseArray(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // ➞ [5, 4, 3, 2, 1]

// 🚀 Modern Solution

// 🔍 Explanation
// Uses .reverse() – Built-in method.
// Spreads (...arr) into a new array to avoid modifying the original.
// ✅ Why is this better?

// Much shorter.
// Avoids manual looping.

const reverseArray = (arr) => [...arr].reverse();

console.log(reverseArray([1, 2, 3, 4, 5])); // ➞ [5, 4, 3, 2, 1]
