// 📌 4. Count Even Numbers

// 🛠️ Hard Code Solution

/**🔍 Explanation
 * 
Initialize count = 0.
Loop through the array.
Check if the number is even (% 2 === 0).
Increment count.
Return count.
 */

function countEvenNumbers(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // ➞ 3

//🚀 Modern Solution

// 🔍 Explanation

// Uses .filter() – Creates a new array of only even numbers.
// .length gets the count.
// ✅ Why is this better?

// Cleaner & Shorter.
// No need for a manual loop.

const evenCount = (arr) => arr.filter((num) => num % 2 === 0).length;
console.log(evenCount([1, 2, 3, 4, 5, 6])); // ➞ 3

// we can also do it like this for odd, and !== dose so we can use negatve numbers

const oddCount1 = (arr) => arr.filter((num) => num % 2 !== 0).length;
console.log(oddCount1([-1, -2, 1, 2, 2, 2])); // ➞ 2 whit negetive numbers

let array = [1, 2, 2, 3, 4, -2];
