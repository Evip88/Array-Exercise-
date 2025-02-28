// 📌 10. Merge Two Arrays Without Duplicates

// 🛠️ Hard Code Solution

// 🔍 Explanation

// Merge both arrays using .concat().
// Loop through the merged array.
// Push only unique values into result.

function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2);
  let result = [];

  for (let i = 0; i < merged.length; i++) {
    if (!result.includes(merged[i])) {
      result.push(merged[i]);
    }
  }

  return result;
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // ➞ [1, 2, 3, 4, 5]

// 🚀 Modern Solution

// 🔍 Explanation

// Spreads (...) both arrays into a Set (removes duplicates).
// Spreads the Set back into an array.
// ✅ Why is this better?

// One-liner solution.
// Much more efficient.

const mergeArrays1 = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(mergeArrays1([1, 2, 3], [3, 4, 5])); // ➞ [1, 2, 3, 4, 5]
