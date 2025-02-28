// "Hard Code" Solution – A basic, traditional approach using loops and manual operations.

//🔍 Explanation of Hard Code Solution
// Check for an empty array – If the length is 0, return [] to prevent errors.
// Manually get the first element – arr[0].
// Manually get the last element – arr[arr.length - 1].
// Return the two elements in an array.

function firstAndLast(arr) {
  if (arr.length === 0) {
    return [];
  }

  let firtElement = arr[0];
  let lastElement = arr[arr.length - 1];

  return [firtElement, lastElement];
}

console.log(firstAndLast([1, 2, 3, 4, 5])); // ➞ [1, 5]
console.log(firstAndLast(["apple", "banana", "cherry"])); // ➞ ["apple", "cherry"]
console.log(firstAndLast([])); // ➞ []

// "Modern Solution"

// 🔍 Explanation of Modern Solution
// Arrow function – Makes it shorter.
// Ternary operator (? :) – Handles empty arrays in one line.
// .at(-1) – Directly gets the last element (introduced in ES2022).
// ✅ Why is this better?

// Shorter & Readable – One-liner instead of multiple lines.
// Uses .at(-1) instead of arr.length - 1, making it more intuitive.

const firstAndLast1 = (arr) => (arr.length ? [arr[0], arr.at(-1)] : []);

console.log(firstAndLast1([1, 2, 3, 4, 5])); // ➞ [1, 5]
console.log(firstAndLast1(["apple", "banana", "cherry"])); // ➞ ["apple", "cherry"]
console.log(firstAndLast1([])); // ➞ []

const newArray = [1, 2, 3, 4, 5];

const lastAndFirst = (arr) => (arr.length ? [arr[0], arr.at(-1)] : []);

// Summary of the Ternary Operator (? :)
// Syntax	Meaning
// condition ? value_if_true : value_if_false	If condition is true, return value_if_true, otherwise return value_if_false.
// 🔹 Ternary is a shortcut for if-else and is commonly used for concise logic in JavaScript. 🚀
