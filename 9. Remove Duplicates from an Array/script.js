// 9. Remove Duplicates from an Array

// 🛠️ Hard Code Solution

// 🔍 Explanation

// Create an empty result array.
// Loop through arr, checking if result already contains arr[i].
// If not, push it to result.
// Return result.

function removeDuplicates2(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5])); // ➞ [1, 2, 3, 4, 5]

//🚀 Modern Solution

// 🔍 Explanation

// Uses Set to remove duplicates.
// Spreads (...) the Set back into an array.
// ✅ Why is this better?

// Faster & more efficient.
// Shorter & cleaner.

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // ➞ [1, 2, 3, 4, 5]

// 6️⃣ Final Answer
// ✅ new Set(arr) removes duplicates because a Set only stores unique values.
// ✅ new creates an instance of Set (without new, JavaScript throws an error).
// ✅ [...new Set(arr)] converts the Set back into an array using the spread operator.
// ✅ This is the most efficient way to remove duplicates! 🚀

//imperative code full

function removeDuplicates3(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let exists = false;

    // Manually check if the element is already in 'result'
    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        exists = true;
        break; // Exit inner loop early if found
      }
    }

    // If not found, add it to result
    if (!exists) {
      result.push(array[i]);
    }
  }

  return result;
}

// Test case
console.log(removeDuplicates3[(1, 2, 2, 3, 4, 4, 5)]); // ➞ [1, 2, 3, 4, 5]
