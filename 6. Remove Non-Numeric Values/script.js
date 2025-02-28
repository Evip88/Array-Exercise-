// 📌 6. Remove Non-Numeric Values

// 🛠️ Hard Code Solution

// 🔍 Explanation

// Create an empty array result to store numbers.

// Loop through arr, checking if each element is a number (typeof arr[i] === "number").
// it only return what typ we have ! this way we can choose what typ we want to select

console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof null); // "object" (special case)
console.log(typeof undefined); // "undefined"

// If true, push it to result.

// Return the new array with only numbers.

function filterNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterNumbers([1, "hello", 3, true, 5, "world"])); // ➞ [1, 3, 5]

// 🚀 Modern Solution

// 🔍 Explanation
// Uses .filter() to create a new array.
// Keeps only elements where typeof num === "number".
// Shorter & more readable.
// ✅ Why is this better?

// No need for manual looping.
// Cleaner & more efficient.

const filterNumbers1 = (arr) => arr.filter((num) => typeof num === "number");

// This is how we have to do if we dont use push, method. we need to create new variable and store it
// in the result[index] otherwise we just add value adn when it iterated it deletes the old and puts new in
// but whit a new varablie number 0, we add it to [] and also increment so it goes to next
//  thats why result[index] = arr[i] store arr[i] in the 0 and in the [], oterwise it just replaces, and
// we get singel number not all of them.

function filterNumbers(arr) {
  let result = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result[index] = arr[i];
      index++;
    }
  }

  return result;
}
console.log(filterNumbers([1, "hello", 3, true, 5, "world"])); // ➞ [1, 3, 5]
